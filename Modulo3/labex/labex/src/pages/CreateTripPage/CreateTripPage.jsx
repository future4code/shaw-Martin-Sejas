import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { CreateTripPageCoreDiv, CreateTripPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button, Input } from '@chakra-ui/react';
import {FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { CreateTrip } from '../../services/requests';


function CreateTripPage() {
  const navigate = useNavigate(); 
  
  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

  
  const logOut = () => {
    window.localStorage.clear(); 
    goToHomePage(navigate); 
  }




  return (
    <CreateTripPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{logOut()}}/>

           <CreateTripPageCoreDiv>
             
             <h1>Criar Viagem</h1>

            <Formik
              initialValues={ {name: "",  planet: "", date: "", description: "", durationInDays: 0}}
              
              //controle de input
              validationSchema = {Yup.object({
                name: Yup.string()
                .max(30, 'Maximo 30 caracteres ou menos')
                .min(3, "Minimo 3 caracteres")
                .required('Campo Obrigatorio'),
                planet: Yup.string()
                .max(30, 'Maximo 30 caracteres ou menos')
                .min(3, "Minimo 3 caracteres")
                .required('Campo Obrigatorio'),
                date: Yup.string()
                .matches(/^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,"Data em dd/mm/yyyy")
                .required("Campo Obrigatorio"),
                description: Yup.string()
                .min(5, "Minimo 5 caracteres")
                .max(85, "Maximo 85 caracteres")
                .required("Campo Obrigatorio"),
                durationInDays: Yup.number()
                .required("Campo Obrigatorio")
                .moreThan(0,"Minimo 1 dia ou mais de viagem")
                .positive()
                .integer("Tem que ser um numero"),

              })}
              //actions on submit
              onSubmit = { (values, actions) => {
                setTimeout( ()=> {
                  let body = values; 
               
                 
                  let token = window.localStorage.getItem('token'); 
                  let answer = CreateTrip("trips", body,token);

                  
                    actions.resetForm();
                    actions.setSubmitting(false);
                   
                  
                


                 
                },1000);
              }}
            >
              { (props) => {
                return(
                <Form >
                  <Field name="name" >
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name} className="field">
                        <FormLabel className="formLabel" htmlFor="name" >Nome</FormLabel>
                        <Input {...field} id="name" placeholder="name"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="planet">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.planet && form.touched.planet} className="field">
                        <FormLabel className="formLabel" htmlFor="planet">Planeta</FormLabel>
                        <Input {...field} id="planet" placeholder="nome do planeta"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.planet}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="date">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.date && form.touched.date} className="field">
                        <FormLabel className="formLabel" htmlFor="date">Data</FormLabel>
                        <Input {...field} id="date" placeholder="dd/mm/yyyy"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.date}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="description">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.description && form.touched.description} className="field">
                        <FormLabel className="formLabel" htmlFor="description">Descrição</FormLabel>
                        <Input {...field} id="description" placeholder="Descrição"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.description}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="durationInDays">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.durationInDays && form.touched.durationInDays} className="field">
                        <FormLabel className="formLabel" htmlFor="durationInDays">Duração em Dias</FormLabel>
                        <Input {...field} id="durationInDays" placeholder="1"/>
                        <FormErrorMessage className='errorMessage'> {"Deve ser um numero"}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>


                  <Button
                    colorScheme="secondary"
                    isLoading={props.isSubmitting}
                    type = 'submit'
                    >
                      Submit
                    </Button>

                </Form>
                )
              }}


            </Formik>
             
            
           </CreateTripPageCoreDiv>
    </CreateTripPageDiv>
  )
}

export default CreateTripPage