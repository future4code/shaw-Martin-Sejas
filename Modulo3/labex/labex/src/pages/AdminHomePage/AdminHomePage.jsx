import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLastPage, goToLoginPage, goToCreateTripPage, goToAdminHomePage } from '../../services/Routes/coordinator';
import { AdminHomePageDiv, AdminHomePageCoreDiv, MissionNameList } from './styled';
import Header from '../../components/Header/Header';
import { Button } from '@chakra-ui/react';
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { DeleteTrip, useRequestData } from '../../services/requests';
import TripCard from '../../components/TripCard/TripCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AdminHomePage() {
  
  let [change, setChange] = useState(0);
  const navigate = useNavigate();
  let trips = useRequestData("trips");

  useEffect( ()=> {
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
     
      goToLoginPage(navigate)
    }

  },[])

  

  let showTrips = (trips && trips.trips.map( (trip) => {
   
    return(<TripCard key= {trip.id} name={trip.name} id={trip.id}  deleteTrip ={ (id) => deleteTrips(id) }/>)
  }))



 

  const logOut = () => {
    window.localStorage.clear(); 
    toast.info("Logged Out")
    goToHomePage(navigate); 
  }

  const deleteTrips = (id) => {
    let token = window.localStorage.getItem('token'); 
    if (window.confirm("Tem certeza que deseja deletar a missão?"))
    {
      let newTrips = trips.trips.filter( (trip) => {
        return (trip.id !== id)
      }); 

      trips.trips = [...newTrips];
      (change > 100 ? (setChange(0)) : (setChange(change+1)));
       DeleteTrip(`trips/${id}`,token);
   
    }
     


  }

  


 
  return (
    <AdminHomePageDiv>
    <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{logOut()}}/>

           <AdminHomePageCoreDiv>
             
             <h1>Painel Administrativo</h1>

             <Button colorScheme="secondary" onClick={() => { goToCreateTripPage(navigate)}}>Criar Viagem</Button>

             <MissionNameList>
                {showTrips ? showTrips: <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}
              </MissionNameList>
             
            
           </AdminHomePageCoreDiv>
    </AdminHomePageDiv>
  
  )
}

export default AdminHomePage