import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { useRequestData } from '../../services/requests';
import { goToAdminHomePage, goToApplicationFormPage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { ListTripsPageDiv } from './styled';
import { LoggedIn } from '../../components/hooks/LoggedIn';

function ListTripsPage() {

  let navigate = useNavigate();   
  let trips = useRequestData("trips")
  let loggedIn = LoggedIn(); 

  return (
    <ListTripsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
              right = {loggedIn? "Admin Area" : "Login"} rightButton={loggedIn? ()=> goToAdminHomePage(navigate) :() =>goToLoginPage(navigate)}/>

             <div>
               
               <p>Missões Disponiveis (List Trips Page)</p>
               <Button colorScheme="secondary" onClick={() => goToApplicationFormPage(navigate)} >Inscrever-se</Button>
             </div>
    </ListTripsPageDiv>
  )
}

export default ListTripsPage