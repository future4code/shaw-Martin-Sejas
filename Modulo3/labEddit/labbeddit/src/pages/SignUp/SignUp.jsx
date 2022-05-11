import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToFeed, goToLastPage } from '../../services/Routes/coordinates';
import { SignUpContentDiv, SignUpMainDiv, SignUpFormDiv } from './styled';
import { Button, Input} from '@chakra-ui/react';
import {FormControl, FormErrorMessage, Checkbox} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { Register } from '../../services/requests';


function SignUp() {
  const navigate = useNavigate(); 

  useEffect(() => {
   let myToken = window.localStorage.getItem('token'); 

   if(myToken) {
     goToFeed(navigate); 
   }
  
   
  }, [])
  

  return (
    <SignUpMainDiv>
      <Header 
      showLeftButton={false} 
      rightButtonText={"Entrar"} 
      rightButtonClick = {()=> goToLastPage(navigate)}
      />
      <SignUpContentDiv>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>

        <SignUpFormDiv>
      <Formik
        initialValues={ {username: "", email:"", password: ""}}

        //input control
        validationSchema = { Yup.object({
          username: Yup.string()
          .min(4, "Minimo 4 caracteres")
          .max(15, "Maximo 15 caracteres")
          .required("Campo Obrigatorio"),
          email: Yup.string()
          .email("Usuario deve ser um email")
          .min(4, "Minimo 4 caracteres")
          .required("Campo Obrigatorio"),
          password: Yup.string()
          .max(30, 'Maximo 30 caracteres')
          .min(8, "Minimo 8 caracteres")
          .required('Campo Obrigatorio'),
         
        })}

        //actions on Submit
        onSubmit = { (values, actions) => {
         
            let body = {
              username: values.username, 
              email: values.email, 
              password: values.password
            }

            let answer = Register(body); 
            answer.then( (response) => {
              actions.resetForm(); 
              actions.setSubmitting(false);
              window.localStorage.setItem("token", response.token);
              goToFeed(navigate); 
            }).catch( (error) => {
              alert("Erro ao se cadastrar, tente de novo")
            })
            
        }}
      >
        { (props) => {
          return (
            <Form>
            
              <Field name="username">
                {({field, form}) => ( 
                  <FormControl isInvalid={form.errors.username && form.touched.username} className="field">
                    <Input {...field} className="loginInput"  placeholder='Nome  de usuário' _placeholder={{opacity: 0.8, color: '#323941' }} />
                    <FormErrorMessage className = "errorMessage">{form.errors.username}</FormErrorMessage>
                  </FormControl>
                  )}
              </Field>

              <Field name="email">
                {({field, form}) => ( 
                  <FormControl isInvalid={form.errors.email && form.touched.email} className="field">
                    <Input {...field} className="loginInput"  placeholder='E-mail' _placeholder={{opacity: 0.8, color: '#323941' }} />
                    <FormErrorMessage className = "errorMessage">{form.errors.email}</FormErrorMessage>
                  </FormControl>
                  )}
              </Field>

              <Field name="password">
                {({field, form}) => ( 
                  <FormControl isInvalid={form.errors.password && form.touched.password} className="field">
                    <Input {...field} className="loginInput" placeholder='Senha' _placeholder={{opacity: 0.8, color: '#323941' }} type="password"/>
                    <FormErrorMessage className = "errorMessage">{form.errors.password}</FormErrorMessage>
                  </FormControl>
                  )}
              </Field>

              <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário </span>e nossa <span>Política de Privacidade.</span></p>
              <Checkbox > <span id = 'checkbox'>Eu concordo em receber emails sobre coisas legais no Labeddit</span></Checkbox>
              <Button id="loginButton" variant='solid' isLoading={props.isSubmitting} type='submit' >Cadastrar</Button>

              
            </Form>
          )
        }}
      </Formik>

     
    </SignUpFormDiv>


      </SignUpContentDiv>
    </SignUpMainDiv>
  )
}

export default SignUp