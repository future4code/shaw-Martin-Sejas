import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { Button } from '@chakra-ui/react';
import { useRequestDataAuth } from '../../services/requests';
import { goToLoginPage, goToLastPage } from '../../services/Routes/coordinator';
import { TripDetailsPageDiv } from './styled';
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

      
      <div>{trip ? trip.trip.name: <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}</div>
      </TripDetailsPageDiv>
  )
}

export default TripDetailsPage