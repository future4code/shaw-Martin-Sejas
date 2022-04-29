import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { useRequestData } from '../../services/requests';
import { goToAdminHomePage, goToApplicationFormPage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { ListTripsPageCoreDiv, ListTripsPageDiv, MissionListDiv } from './styled';
import { LoggedIn } from '../../components/hooks/LoggedIn';
import MissionCard from '../../components/MissionCard/MissionCard'

function ListTripsPage() {

  let navigate = useNavigate();   
  let trips = useRequestData("trips"); 
  let loggedIn = LoggedIn(); 


  let myTrips = (trips && trips.trips.map( (trip) => {
    return( <MissionCard trip={trip} key={trip.id}></MissionCard>)
  }))

  return (
    <ListTripsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
              right = {loggedIn? "Admin" : "Login"} rightButton={loggedIn? ()=> goToAdminHomePage(navigate) :() =>goToLoginPage(navigate)}/>

             <ListTripsPageCoreDiv>
               
               <h1>Missões Disponiveis</h1>
               <Button colorScheme="secondary" onClick={() => goToApplicationFormPage(navigate)} >Inscrever-se</Button>

               <MissionListDiv>
               {myTrips ? myTrips: <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}
               </MissionListDiv>

             </ListTripsPageCoreDiv>
    </ListTripsPageDiv>
  )
}

export default ListTripsPage