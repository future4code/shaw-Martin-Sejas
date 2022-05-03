import React from "react";
import { MatchCardContainer } from "./style";






 const MatchCard= (props) => {
 
 


  
  return (
    <MatchCardContainer>
      
        <img src={props.match.photo} alt= "profile pic"></img>
       <h3>{props.match.name}</h3>
    </MatchCardContainer>
  )
}

export default MatchCard; 