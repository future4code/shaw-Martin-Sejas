import React, { useState, useEffect} from 'react';
import labenu from '../../assets/logo.svg';
import { MainLoginPageDiv, LoginFormDiv } from './styled';
import { goToFeed, goToSignUp } from '../../services/Routes/coordinates';
import { Button, Input} from '@chakra-ui/react';
import {FormControl, FormErrorMessage} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { attemptLogin } from '../../services/requests';


function Login() {

  const navigate = useNavigate(); 
  let [failedLogin, setFailedLogin] = useState(false); 

  useEffect(() => {
    let myToken = window.localStorage.getItem('token'); 
 
    if(myToken) {
      goToFeed(navigate); 
    }
   
    
   }, [])

  return (
    <MainLoginPageDiv>
      <img alt="logo" src={labenu}/>
      <h1>LabEddit</h1>
      <h3>O projeto da rede social da Labenu</h3>
      

    <LoginFormDiv>
      <Formik
        initialValues={ {username: "", password: ""}}

        //input control
        validationSchema = { Yup.object({
          username: Yup.string()
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
              email: values.username,
              password: values.password
            }

          let answer =  attemptLogin(body,setFailedLogin); 
          answer.then( (response) => {
            actions.resetForm(); 
            actions.setSubmitting(false);
            window.localStorage.setItem("token", response.token)
            goToFeed(navigate); 
           
          }).catch( (error) => {})

      
        }}
      >
        { (props) => {
          return (
            <Form>
              {failedLogin ? <p>Erro: Verifique usuario e senha</p>: null}
              <Field name="username">
                {({field, form}) => ( 
                  <FormControl isInvalid={form.errors.username && form.touched.username} className="field">
                    <Input {...field} className="loginInput"  placeholder='Email' _placeholder={{opacity: 0.8, color: '#323941' }} />
                    <FormErrorMessage className = "errorMessage">{form.errors.username}</FormErrorMessage>
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

              <Button id="loginButton" variant='solid' isLoading={props.isSubmitting} type='submit' >Continuar</Button>

              <hr/>
            </Form>
          )
        }}
      </Formik>

     
    </LoginFormDiv>
    <Button variant="outline" colorScheme="primary" onClick={() => goToSignUp(navigate)}>Crie uma conta!</Button>
      </MainLoginPageDiv>
  )
}

export default Login