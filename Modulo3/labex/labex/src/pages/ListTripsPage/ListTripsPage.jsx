import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate, } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { goToApplicationFormPage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { ListTripsPageDiv } from './styled';

function ListTripsPage() {

  let navigate = useNavigate(); 
  
  
  


  return (
    <ListTripsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
              right = "Area de Admin" rightButton={() =>goToLoginPage(navigate)}/>

             <div>
               
               <p>Missões Disponiveis (List Trips Page)</p>
               <Button colorScheme="secondary" onClick={() => goToApplicationFormPage(navigate)} >Inscrever-se</Button>
             </div>
    </ListTripsPageDiv>
  )
}

export default ListTripsPage