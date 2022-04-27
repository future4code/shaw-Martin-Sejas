import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { CreateTripPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';
import { LoggedIn } from '../../components/hooks/LoggedIn';

function CreateTripPage() {
  const navigate = useNavigate(); 
  


  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

  return (
    <CreateTripPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{}}/>

           <div>
             
             <p>CreateTrip (CreateTripPage)</p>
            
           </div>
    </CreateTripPageDiv>
  )
}

export default CreateTripPage