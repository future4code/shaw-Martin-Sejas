import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoggedIn} from '../../components/hooks/LoggedIn'
import {  goToLastPage, goToAdminHomePage, goToLoginPage } from '../../services/Routes/coordinator';
import { ApplicationFormPageCoreDiv, ApplicationFormPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button, Select} from '@chakra-ui/react';
import COUNTRIES from "../../assets/countries.json"
import { DeleteTrip, useRequestData } from '../../services/requests';

function ApplicationFormPage() {





  
const navigate = useNavigate(); 
const loggedIn = LoggedIn(); 
let trips = useRequestData("trips"); 

let countries =  COUNTRIES.map( (country) => 
{
  return(<option value={country.ordem}>{country.nome}</option>)
}); 

let tripsList = (trips && trips.trips.map( (trip) => {
  
}))


  return (
    <ApplicationFormPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
           right = {loggedIn? "Admin" : "Login"} rightButton={loggedIn? ()=> goToAdminHomePage(navigate) :() =>goToLoginPage(navigate)}/>

            <ApplicationFormPageCoreDiv>
             
             <h1>Portal de Candidaturas</h1>
             <Button colorScheme="secondary"  >Submit</Button>
           </ApplicationFormPageCoreDiv>
    </ApplicationFormPageDiv>
  )
}

export default ApplicationFormPage