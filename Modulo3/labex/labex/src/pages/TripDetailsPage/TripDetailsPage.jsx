import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { goToLoginPage } from '../../services/Routes/coordinator';
function TripDetailsPage() {
  const navigate = useNavigate(); 


  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

  return (
    <div>TripDetailsPage</div>
  )
}

export default TripDetailsPage