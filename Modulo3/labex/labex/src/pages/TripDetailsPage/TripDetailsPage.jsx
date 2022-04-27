import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { useRequestDataAuth } from '../../services/requests';
import { goToLoginPage, goToLastPage } from '../../services/Routes/coordinator';
import { TripDetailsPageDiv } from './styled';
import Header from '../../components/Header/Header';
function TripDetailsPage() {

 
  let [myToken, setMyToken] = useState(""); 
  const navigate = useNavigate(); 
  const params = useParams();

  console.log(params)
   const trip = useRequestDataAuth(`trip/${params.id}`, myToken);
  console.log(trip)

  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    console.log(token)
    if(token === null)
    {
      goToLoginPage(navigate)
    }

    setMyToken(token)

  },[])



  return (
    <TripDetailsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{}}/>

      
      <div>{trip && trip.trip.name}</div>
      </TripDetailsPageDiv>
  )
}

export default TripDetailsPage