import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../../services/Routes/coordinator';
import { ApplicationFormPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';

function ApplicationFormPage() {
  
const navigate = useNavigate(); 

  return (
    <ApplicationFormPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Home" rightButton={() =>goToHomePage(navigate)}/>

           <div>
             
             <p>Se Cadastrar em Missao (Application Form Page)</p>
             <Button colorScheme="secondary"  >Submit</Button>
           </div>
    </ApplicationFormPageDiv>
  )
}

export default ApplicationFormPage