import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../../services/Routes/coordinator';
import { CreateTripPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';

function CreateTripPage() {
  const navigate = useNavigate(); 

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