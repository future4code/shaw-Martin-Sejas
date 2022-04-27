import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage, goToLoginPage } from '../../services/Routes/coordinator';
import { AdminHomePageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';
import { LoggedIn } from '../../components/hooks/LoggedIn';

function AdminHomePage() {
  const navigate = useNavigate();
  

  useEffect( ()=> {
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

 
  

  const logOut = () => {
    window.localStorage.clear(); 
    goToHomePage(navigate); 
  }
  return (
    <AdminHomePageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{logOut()}}/>

           <div>
             
             <p>AdminHome (AdminHomePage)</p>
            
           </div>
    </AdminHomePageDiv>
  
  )
}

export default AdminHomePage