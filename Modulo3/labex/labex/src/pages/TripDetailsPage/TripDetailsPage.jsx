import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoggedIn } from '../../components/hooks/LoggedIn';
import { Button } from '@chakra-ui/react';
import { DecideCandidate, useRequestDataAuth } from '../../services/requests';
import { goToLoginPage, goToLastPage } from '../../services/Routes/coordinator';
import { ApprovedCandidateDiv, CandidateListDiv, TripDetailsPageCoreDiv, TripDetailsPageDiv } from './styled';
import MissionCard from '../../components/MissionCard/MissionCard';
import Header from '../../components/Header/Header';
import CandidateCard from '../../components/CandidateCard/CandidateCard';
function TripDetailsPage() {

  let [change, setChange] = useState(0);
  const navigate = useNavigate(); 
  const params = useParams();
  
  useEffect( ()=> {
    
    let token = window.localStorage.getItem('token'); 
    if(token === null)
    {
      goToLoginPage(navigate)
    }

  },[])

  


   const myToken = window.localStorage.getItem('token')
   let trip = useRequestDataAuth(`trip/${params.id}`, myToken);

   let candidates = trip && trip.trip.candidates.map( (candidate) => {
      return (<CandidateCard 
        candidate={candidate} 
        key={candidate.id} 
        approveCandidate={(id) => decideCandidate(id, true)} 
        rejectCandidate = {(id) => decideCandidate(id, false)}
        />)
   }); 
   let approved = trip && trip.trip.approved.map ( (candidate) => {
    
     return(<li key={candidate.id}>{candidate.name}</li>)
   });

  
   let decideCandidate = (candidateId, approve) => {

   
   
    let newCandidates = trip.trip.candidates.filter( (candidate) => {
      if(approve && candidate.id === candidateId) 
      {
        trip.trip.approved = [...trip.trip.approved, candidate]
      }
      return (candidate.id !== candidateId);
    }); 

    trip.trip.candidates = [...newCandidates];
      
    let body = {
      "approve": approve
    };

    

    (change > 100 ? (setChange(0)) : (setChange(change+1)));
    DecideCandidate(`trips/${params.id}/candidates/${candidateId}/decide`, body, myToken);
     
   }

   useEffect( ()=> {}, [change])
  
  

  return (
    <TripDetailsPageDiv>
      <Header left = "Voltar" leftButton={() => goToLastPage(navigate)}
            right = "Logout" rightButton={() =>{}}/>

      
      
        {trip ? (
          <TripDetailsPageCoreDiv>
           <h1>{"Gerenciamento de Missão:"}</h1>
           <MissionCard id= "missionCard" trip={trip.trip}/>

           <h2 className='tituloCandidato'>Candidatos Aprovados: <span>{approved ? approved.length : 0}</span></h2>
           <ApprovedCandidateDiv>
            {approved.length > 0 ? approved : <p id="emptyMessage"> Nenhuma candidatura aprovada!</p>}
           </ApprovedCandidateDiv>

           

           <h2 className='tituloCandidato'>Candidatos Pendentes: <span>{candidates ? candidates.length : 0}</span></h2>


           <CandidateListDiv>
             {candidates}
           </CandidateListDiv>
           
          </TripDetailsPageCoreDiv>
        )
        : <Button isLoading= {true} colorScheme="primary" size="lg" variant= 'ghost'>Loading</Button>}
       
      </TripDetailsPageDiv>
       
  )
}

export default TripDetailsPage