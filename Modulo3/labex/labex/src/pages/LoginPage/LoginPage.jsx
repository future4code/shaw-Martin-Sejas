import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../../services/Routes/coordinator';
import { LogInPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';

function LoginPage() {
  const navigate = useNavigate(); 

  return (
    <LogInPageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Home" rightButton={() =>goToHomePage(navigate)}/>

           <div>
             
             <p>Login (Application Form Page)</p>
             <Button colorScheme="secondary"  >Submit</Button>
           </div>
    </LogInPageDiv>
  )
}

export default LoginPage