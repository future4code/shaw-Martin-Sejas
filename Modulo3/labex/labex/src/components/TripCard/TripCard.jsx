import React, { useState } from 'react';
import { TripCardDiv } from './styled';
import {DeleteIcon, InfoOutlineIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { goToTripDetailsPage } from '../../services/Routes/coordinator';
import { Button } from '@chakra-ui/react';

export const TripCard = (props) => {

const navigate = useNavigate(); 

const goToDetailPage = () => {
      
        goToTripDetailsPage(navigate,props.id); 
    }
  return (
    <TripCardDiv>
       <p>{props.name}</p>
       <InfoOutlineIcon id= "viewIcon" onClick={()=> goToDetailPage()}/>
       <DeleteIcon id="icon" color="red" onClick={()=> {props.deleteTrip(props.id)} }/>
      </TripCardDiv>
  )
}

export default TripCard; 