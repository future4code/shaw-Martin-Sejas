import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import {goToLogin, performLogout} from '../../services/Routes/coordinates'
import { FeedContentDiv, FeedMainDiv, FeedSubmitPostDiv } from './styled';
import { Button, Input} from '@chakra-ui/react';
import {FormControl, FormErrorMessage, Textarea} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function Feed() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }
  
  }, [])

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
       
      </FeedContentDiv>
    </FeedMainDiv>
    
  )
}

export default Feed