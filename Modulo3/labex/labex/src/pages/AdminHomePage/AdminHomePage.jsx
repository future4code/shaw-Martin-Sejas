import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../../services/Routes/coordinator';
import { AdminHomePageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';

function AdminHomePage() {

  const navigate = useNavigate();
  return (
    <AdminHomePageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{}}/>

           <div>
             
             <p>AdminHome (AdminHomePage)</p>
            
           </div>
    </AdminHomePageDiv>
  
  )
}

export default AdminHomePage