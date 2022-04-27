import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToListTripsPage } from '../../services/Routes/coordinator';
import { LogInPageCoreDiv, LogInPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button, Input, InputGroup } from '@chakra-ui/react';

function LoginPage() {
  const navigate = useNavigate(); 

  return (
    <LogInPageDiv>
    <Header left = "Missões" leftButton={() => goToListTripsPage(navigate)}
            right = "Home" rightButton={() =>goToHomePage(navigate)}/>

           <LogInPageCoreDiv>
             <p>Login</p>

             
             <Input 
             colorScheme="secondary" 
             variant='filled' 
             placeholder='Email' 
             _placeholder={{opacity: 1, color: 'white'}}
             type="email"
             />
             <Input 
             colorScheme="primary" 
             variant="filled"
             placeholder='Password' 
              _placeholder={{opacity: 1, color: 'white'}}
              type= "password"
              />
             <Button  colorScheme="secondary"  >Entrar</Button>
             
            
           </LogInPageCoreDiv>
    </LogInPageDiv>
  )
}

export default LoginPage