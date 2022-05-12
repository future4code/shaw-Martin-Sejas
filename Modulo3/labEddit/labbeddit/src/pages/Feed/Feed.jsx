import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import {goToLogin, performLogout} from '../../services/Routes/coordinates'
import { FeedContentDiv, FeedMainDiv, FeedPostsDiv, FeedSubmitPostDiv } from './styled';
import {Button, Input, FormControl, FormErrorMessage, Textarea} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import ReactPaginate from 'react-paginate';
import { CreatePost, GetPosts } from '../../services/requests';
import PostBox from '../../components/PostBox/PostBox';

function Feed() {
  const navigate = useNavigate(); 
  
  let [postsOnScreen, setPostsOnScreen] = useState(null); 
  let [pageCount, setPageCount] = useState(1); 
  let [createdPost, setCreatedPost] = useState(false)

  //
  const [postOffset, setPostOffset] = useState(0); 
  
  useEffect(() => {
    //check if loggedIn
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }

    let token = window.localStorage.getItem('token'); 

    //get posts from API
     GetPosts(`posts?page=${pageCount}`, token, setPostsOnScreen)

  
  }, [])


  useEffect(() => {
    
  }, [postsOnScreen])
  

  let posts = postsOnScreen && postsOnScreen.length>0  && postsOnScreen.map( (post)=> {
    return( <PostBox key={post.id} post={post} />)
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
              GetPosts(`posts?page=${pageCount}`, token, setPostsOnScreen);
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
       
      </FeedContentDiv>
    </FeedMainDiv>
    
  )
}

export default Feed