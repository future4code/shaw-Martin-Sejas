import React, {useState, useEffect} from "react";
import { HomeScreenContainer, MainCardContainer, SwipeContainer } from "./style";
import deny from "../../assets/deny-emoji.svg";
import accept from "../../assets/accept-emoji.svg";
import { Heading } from "@chakra-ui/react";



//receive from props card id
//props = profile

 const HomeScreen = (props) => {


  return (
    <HomeScreenContainer>

      <MainCardContainer 
      style = {{
        backgroundImage: `url(${props.profile.photo})`,
        backgroundSize: "100% 100%"
      }}
      >
       
        
       <div> 
         <Heading size='lg'>{props.profile.name}, {props.profile.age}</Heading>
        <p>{props.profile.bio}</p>
        </div>
       
      
      </MainCardContainer>

      <SwipeContainer>
      <img src= {deny} alt= "X" onClick={() =>props.denyMatch()}></img>
      <img src= {accept} alt= "heart" onClick={() =>props.acceptMatch()}></img>
      </SwipeContainer>
        
    </HomeScreenContainer>
  )
}

export default HomeScreen; 
