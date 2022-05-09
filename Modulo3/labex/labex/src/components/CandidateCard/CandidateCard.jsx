import React from 'react'
import {CandidateCardDiv, CandidateChoices} from './styled.js';
import { Button } from '@chakra-ui/react';

function CandidateCard(props) {

  //receive id, name, age, profession, country, Application text

  return (
    <CandidateCardDiv>
      <h2>{props.candidate.name}</h2>
      <p> - Idade: {props.candidate.age}</p>
      <p> - Profissão: {props.candidate.profession}</p>
      <p> - País: {props.candidate.country}</p>
      
      <p id="candidateTextTitle">"{props.candidate.applicationText}"</p>

      <CandidateChoices>
        <Button colorScheme= "secondary" onClick={()=>props.approveCandidate(props.candidate.id)}> Aprovar</Button> <Button colorScheme = "red" onClick={()=>props.rejectCandidate(props.candidate.id)}>Reprovar</Button>
      </CandidateChoices>
      </CandidateCardDiv>
  )
}

export default CandidateCard;