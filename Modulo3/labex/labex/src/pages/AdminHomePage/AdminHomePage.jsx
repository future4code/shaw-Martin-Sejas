import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage, goToLoginPage, goToCreateTripPage } from '../../services/Routes/coordinator';
import { AdminHomePageDiv, AdminHomePageCoreDiv, MissionNameList } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { useRequestData } from '../../services/requests';
import TripCard from '../../components/TripCard/TripCard';

function AdminHomePage() {
  
  const navigate = useNavigate();
  

  useEffect( ()=> {
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

  const trips = useRequestData("trips");
 
 

  const logOut = () => {
    window.localStorage.clear(); 
    goToHomePage(navigate); 
  }

  let showTrips = (trips && trips.trips.map( (trip) => {
    return(<TripCard key= {trip.id} name={trip.name} id={trip.id} />)
  }))


  return (
    <AdminHomePageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{logOut()}}/>

           <AdminHomePageCoreDiv>
             
             <h1>Painel Administrativo</h1>

             <Button colorScheme="secondary" onClick={() => { goToCreateTripPage(navigate)}}>Criar Viagem</Button>

             <MissionNameList>
                {showTrips}
              </MissionNameList>
             
            
           </AdminHomePageCoreDiv>
    </AdminHomePageDiv>
  
  )
}

export default AdminHomePage