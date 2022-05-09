import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageDiv, HomePageHeader, HomePageMain } from './styled';
import { Button } from '@chakra-ui/react';
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from '../../services/Routes/coordinator';
import { LoggedIn } from '../../components/hooks/LoggedIn';

function HomePage() {

  let loggedIn = LoggedIn(); 
  const navigate = useNavigate(); 


  

  return (
    <HomePageDiv>
      <HomePageHeader>
        <Button colorScheme="primary" textColor="main.font" onClick={loggedIn? () => goToAdminHomePage(navigate):() => goToLoginPage(navigate)}> {loggedIn? "Admin" : "Login"}</Button>

      </HomePageHeader>
      
      <HomePageMain>
        <h1>LabeX</h1>

        <Button colorScheme="primary" textColor="main.font" onClick = {() => goToListTripsPage(navigate)}>Explorar Missões</Button>
      </HomePageMain>

      
      </HomePageDiv>
  )
}

export default HomePage