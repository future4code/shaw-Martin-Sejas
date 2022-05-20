import React, {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {goToLastPage, goToLogin, performLogout} from '../../services/Routes/coordinates'
import { PostCommentsDiv, PostContentDiv, PostMainDiv, PostSubmitCommentDiv } from './styled';
import Header from '../../components/Header/Header';
import {GlobalContext} from '../../contexts/GlobalContext/GlobalContext';
import PostBox from '../../components/PostBox/PostBox';
import {Button, Input, FormControl, FormErrorMessage, Textarea} from '@chakra-ui/react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { GetComments, CreateComment } from '../../services/requests';
import CommentBox from '../../components/CommentBox/CommentBox';

function Post() {
  const {states,setters} = useContext(GlobalContext); 
  let {detailedPost} = states; 
  const params = useParams(); 
  let [comments, setComments] = useState([]); 
  let [commented, setCommented] = useState(false); 
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }

    let token = window.localStorage.getItem('token'); 
    GetComments(`posts/${params.id}/comments`,token, setComments, setCommented )

  
  }, [])


  useEffect(() => {
  
  }, [comments])
  

  let displayComments = comments && commented && comments.length>0  && comments.map( (comment)=> { 
    return( <CommentBox key={comment.id} comment={comment}  />)
  })
  

  return (
    <PostMainDiv>
         <Header 
        rightButtonText = "Logout"
        showLeftButton = {true}
        leftButtonText = "X"
        rightButtonClick = {()=>performLogout(navigate) }
        leftButtonClick = {()=> goToLastPage(navigate)}
      />

      <PostContentDiv>
        <PostBox key={detailedPost.id} post={detailedPost} fromFeed={false}/>


        <PostSubmitCommentDiv>
        <Formik
          initialValues={ {comment: ""}}

          //input control
          validationSchema= { Yup.object({
            comment: Yup.string()
            .min(5, "Minimo 5 caracteres")
            .max(40, "Maximo 120 caracteres")
            .required("Campo Obrigatorio")
          })}

          //actions on Submit
          onSubmit = { (values, actions) => {
            
            let requestBody = {
              body: values.comment
            }
            let token = window.localStorage.getItem('token'); 

            let answer = CreateComment(requestBody,token, params.id)
            answer.then( (response) => {
               GetComments(`posts/${params.id}/comments`,token,setComments, setCommented )
              actions.resetForm(); 
              actions.setSubmitting(false)
            })
            .catch( (error)=> {})
          }}
          >
            { (props) => {
              return(
                <Form>
                  <Field name="comment">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.comment && form.touched.comment}>
                        <Textarea {...field} className = "postBody" placeholder='Escreva o seu comentario' _placeholder={{opacity: 0.8,color: '#323941'}}/>
                        <FormErrorMessage className = "errorMessage">{form.errors.comment}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button id= 'postButton' variant='solid' isLoading={props.isSubmitting} type='submit'>Responder</Button>       
                </Form>
              )
            }}
          </Formik>
          <hr/>
        </PostSubmitCommentDiv>

       <PostCommentsDiv>
            {(comments.length > 0) ? (commented ? displayComments: <p id='noComments'>( Sem comentarios )</p>) : <Button isLoading={true} variant="ghost"></Button>}
       </PostCommentsDiv>

      </PostContentDiv>
      </PostMainDiv>
  )
}

export default Post