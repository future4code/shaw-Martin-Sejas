import React from "react";
import { MatchCardContainer } from "./style";



// age: 2100
// bio: "A procura da Lady Loki para me acompanhar, pode ser você!"
// id: "B388U7ctOQvLPtqRedid"
// name: "Loki"
// photo: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-loki-1.jpg


 const MatchCard= (props) => {
 
 


  
  return (
    <MatchCardContainer>
        <img src={props.match.photo} alt= "profile pic"></img>
       <h3>{props.match.name}</h3>
    </MatchCardContainer>
  )
}

export default MatchCard; 