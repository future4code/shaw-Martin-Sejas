import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import {goToLogin, performLogout} from '../../services/Routes/coordinates'
import { FeedChoosePagesDiv, FeedContentDiv, FeedMainDiv, FeedPostsDiv, FeedSubmitPostDiv } from './styled';
import {Button, Input, FormControl, FormErrorMessage, Textarea} from '@chakra-ui/react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { Pagination } from '@mui/material';
import { CreatePost, GetPosts } from '../../services/requests';
import PostBox from '../../components/PostBox/PostBox';
import {GlobalContext} from '../../contexts/GlobalContext/GlobalContext';


function Feed() {
  const navigate = useNavigate(); 
  
  const {states,setters,requests} = useContext(GlobalContext); 

  let {postsOnDisplay, pageCount} = states; 


  let {setPostsOnDisplay, setPageCount} = setters; 

  let {loadPostsToDisplay} = requests; 

  // let [pageCount, setPageCount] = useState(1); 
  

  //
 
  
  useEffect(() => {
    //check if loggedIn
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }

   loadPostsToDisplay(); 

  
  }, [])


  useEffect(() => {
    loadPostsToDisplay(); 
  }, [postsOnDisplay,pageCount])


 
  

  let posts = postsOnDisplay && postsOnDisplay.length>0  && postsOnDisplay.map( (post)=> {
    return( <PostBox key={post.id} post={post} fromFeed={true} />)
  })

  return (
    <FeedMainDiv>
      <Header 
      rightButtonText = "Logout"
      showLeftButton = {false}
      rightButtonClick = {()=>performLogout(navigate) }
      />
      <FeedContentDiv>

        <FeedSubmitPostDiv>

          <Formik
          initialValues={ {title: "", body: ""}}

          //input control
          validationSchema= { Yup.object({
            title: Yup.string()
            .min(5, "Minimo 5 caracteres")
            .max(40, "Maximo 40 caracteres")
            .required("Campo Obrigatorio"), 
            body: Yup.string()
            .min(5, "Minimo 5 caracteres")
            .max(140, "Maximo 140 caracteres")
            .required("Campo Obrigatorio")
          })}

          //actions on Submit
          onSubmit = { (values, actions) => {
            
            let requestBody = {
              title: values.title,
              body: values.body
            }
            let token = window.localStorage.getItem('token'); 

            let answer = CreatePost(requestBody,token)
            answer.then( (response) => {
              GetPosts(`posts?page=1`, token, setPostsOnDisplay);
              actions.resetForm(); 
              actions.setSubmitting(false)
            })
            .catch( (error)=> {})

            //CODE API REQUEST AND WAIT FOR ANSWER
          }}
          >
            { (props) => {
              return(
                <Form>
                  <Field name="title">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.title && form.touched.title}>
                        <Input {...field} className = "titleInput" placeholder='Titulo do Post' _placeholder={{opacity: 0.8,color: '#323941'}}/>
                        <FormErrorMessage className = "errorMessage">{form.errors.title}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name = "body">
                    {({field, form}) => (
                      <FormControl isInvalid = {form.errors.body && form.touched.body}>
                        <Textarea {...field} className = 'postBody' placeholder='Escreva seu post...' _placeholder={{opacity: 0.8,color: '#323941'}}/>
                        <FormErrorMessage className = "errorMessage">{form.errors.body}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button id= 'postButton' variant='solid' isLoading={props.isSubmitting} type='submit'>Postar</Button>

                  
                </Form>
              )
            }}
          </Formik>
          <hr/>

        </FeedSubmitPostDiv>

        <FeedPostsDiv>
            {(posts && posts.length > 0) ? posts: <Button isLoading={true} variant="ghost"></Button>}
        </FeedPostsDiv>
       
          <Button id="verPosts" isLoading={(posts.length < (pageCount*10))? true: false} onClick={()=> setPageCount(pageCount+1)}>Ver Mais Posts</Button>
       
      </FeedContentDiv>
    </FeedMainDiv>
    
  )
}

export default Feed