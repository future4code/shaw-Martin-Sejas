import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageDiv, HomePageHeader, HomePageMain } from './styled';
import { Button } from '@chakra-ui/react';
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from '../../services/Routes/coordinator';

function HomePage() {
  let [tokenExists, setTokenExists] = useState(false);
  const navigate = useNavigate(); 

  useEffect( () => {
    
    if (window.localStorage.getItem('token') !== null)
    {
      setTokenExists(true)
    }
  }, [])
  

  return (
    <HomePageDiv>
      <HomePageHeader>
        <Button colorScheme="primary" textColor="main.font" onClick={tokenExists? () => goToAdminHomePage(navigate):() => goToLoginPage(navigate)}> {tokenExists? "Admin Area" : "Login"}</Button>

      </HomePageHeader>
      
      <HomePageMain>
        <h1>LabeX</h1>

        <Button colorScheme="primary" textColor="main.font" onClick = {() => goToListTripsPage(navigate)}>Explorar Missões</Button>
      </HomePageMain>

      
      </HomePageDiv>
  )
}

export default HomePage