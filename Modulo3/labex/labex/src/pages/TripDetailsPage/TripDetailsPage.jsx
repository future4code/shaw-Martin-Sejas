import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { Button } from '@chakra-ui/react';
import { useRequestDataAuth } from '../../services/requests';
import { goToLoginPage, goToLastPage } from '../../services/Routes/coordinator';
import { TripDetailsPageCoreDiv, TripDetailsPageDiv } from './styled';
import MissionCard from '../../components/MissionCard/MissionCard';
import Header from '../../components/Header/Header';
function TripDetailsPage() {

 
  const navigate = useNavigate(); 
  const params = useParams();
  
  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  

  },[])

   const myToken = window.localStorage.getItem('token')
   let trip = useRequestDataAuth(`trip/${params.id}`, myToken);





  return (
    <TripDetailsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{}}/>

      
      
        {trip ? (
          <TripDetailsPageCoreDiv>
           <h1>{"Gerenciamento de Missão:"}</h1>
           <MissionCard id= "missionCard" trip={trip.trip}/>

           <h2 className='tituloCandidato'>Candidatos Aprovados</h2>

           <h2 className='tituloCandidato'>Candidatos Pendentes</h2>
          </TripDetailsPageCoreDiv>
        )
        : <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}
       
      </TripDetailsPageDiv>
       
  )
}

export default TripDetailsPage