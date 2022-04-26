import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageDiv, HomePageHeader, HomePageMain } from './styled';
import { Button } from '@chakra-ui/react';
import { goToListTripsPage, goToLoginPage } from '../../services/Routes/coordinator';

function HomePage() {
  const navigate = useNavigate(); 

  return (
    <HomePageDiv>
      <HomePageHeader>
        <Button colorScheme="primary" textColor="main.font" onClick={() => goToLoginPage(navigate)}> Area de Admin</Button>

      </HomePageHeader>
      
      <HomePageMain>
        <h1>LabeX</h1>

        <Button colorScheme="primary" textColor="main.font" onClick = {() => goToListTripsPage(navigate)}>Explorar Missões</Button>
      </HomePageMain>

      
      </HomePageDiv>
  )
}

export default HomePage