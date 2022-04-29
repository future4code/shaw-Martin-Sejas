import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoggedIn} from '../../components/hooks/LoggedIn'
import {  goToLastPage, goToAdminHomePage, goToLoginPage } from '../../services/Routes/coordinator';
import { ApplicationFormPageCoreDiv, ApplicationFormPageDiv } from './styled';
import Header from '../../components/Header/Header';
import COUNTRIES from "../../assets/countries.json"
import { ApplyToTrip, useRequestData } from '../../services/requests';
import { Button, Input, Textarea, Select } from '@chakra-ui/react';
import {FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function ApplicationFormPage() {




  
const navigate = useNavigate(); 
const loggedIn = LoggedIn(); 
let trips = useRequestData("trips"); 

let countries =  COUNTRIES.map( (country) => 
{
  return(<option key={country.ordem} value={country.nome}>{`- ${country.nome}`}</option>)
}); 

let tripsList = (trips && trips.trips.map( (trip, index) => {
   return ( <option key={trip.id} value= {trip.id}>{`- ${trip.name}`}</option>)
}))




  return (
    <ApplicationFormPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
           right = {loggedIn? "Admin" : "Login"} rightButton={loggedIn? ()=> goToAdminHomePage(navigate) :() =>goToLoginPage(navigate)}/>

            <ApplicationFormPageCoreDiv>
             
             <h1>Portal de Candidaturas</h1>

    { tripsList ? 
    <Formik
              initialValues={ {name: "",  mission: "", age: 0, applicationText: "", profession: "", country: ""}}
              
              //controle de input
              validationSchema = {Yup.object({
                name: Yup.string()
                .max(30, 'Maximo 30 caracteres ou menos')
                .min(3, "Minimo 3 caracteres")
                .required('Campo Obrigatorio'),
                mission: Yup.string()
                .required('Campo Obrigatorio'),
                age: Yup.number()
                .required("Campo Obrigatorio")
                .moreThan(18,"Minimo 18 anos para se candidatar")
                .positive()
                .integer("Tem que ser um numero"),
                applicationText: Yup.string()
                .min(5, "Minimo 5 caracteres")
                .max(85, "Maximo 85 caracteres")
                .required("Campo Obrigatorio"),
                profession: Yup.string()
                .min(3, "Minimo 3 caracteres")
                .max(30, "Maximo 30 caracteres")
                .required("Campo Obrigatorio"),
                mission: Yup.string()
                .required('Campo Obrigatorio'),
               
              })}
              //actions on submit
              onSubmit = { (values, actions) => {
                setTimeout( ()=> {
                  let body = {
                    name: values.name,
                    age: values.age,
                    applicationText: values.applicationText,
                    profession: values.profession,
                    country: values.country
                  }; 


                  
                 //trips/:id/apply
                  let token = window.localStorage.getItem('token'); 
                  // let answer = CreateTrip("trips", body,token);
                   let answer = ApplyToTrip(`trips/${values.mission}/apply`,body,token)

                    actions.resetForm();
                    actions.setSubmitting(false);
                   
                  
                 //name, mission, age, applicationText, profession, cou
                 
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
                        <Input {...field} id="name" placeholder="Nome Completo"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="mission">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.mission && form.touched.mission} className="field">
                        <FormLabel className="formLabel" htmlFor="mission">Missão</FormLabel>
                        <Select {...field} id="mission" placeholder="Escolha uma missão" bg="green.700" variant='outline'>
                          {tripsList}
                          </Select>
                        <FormErrorMessage className='errorMessage'>{form.errors.mission}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="age">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.age && form.touched.age} className="field">
                        <FormLabel className="formLabel" htmlFor="age">Idade</FormLabel>
                        <Input {...field} id="age" placeholder="idade"/>
                        <FormErrorMessage className='errorMessage'>{form.errors.age}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="applicationText" >
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.applicationText && form.touched.applicationText} className="field">
                        <FormLabel className="formLabel" htmlFor="applicationText">Texto de Candidatura</FormLabel>
                        <Textarea {...field} id="applicationText" placeholder="Escreva as suas razões..."/>
                        <FormErrorMessage className='errorMessage'>{form.errors.applicationText}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="profession">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.profession && form.touched.profession} className="field">
                        <FormLabel className="formLabel" htmlFor="profession">Profissão</FormLabel>
                        <Input {...field} id="profession" placeholder="Profissão"/>
                        <FormErrorMessage className='errorMessage'> {form.errors.profession}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="country">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.country && form.touched.country} className="field">
                        <FormLabel className="formLabel" htmlFor="country">País</FormLabel>
                        <Select {...field} id="country" placeholder="Escolha um país" bg="green.700">
                          {countries}
                          </Select>
                        <FormErrorMessage className='errorMessage'>{form.errors.mission}</FormErrorMessage>
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


            </Formik> : <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}
            
           </ApplicationFormPageCoreDiv>
    </ApplicationFormPageDiv>
  )
}

export default ApplicationFormPage