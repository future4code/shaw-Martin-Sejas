import React, {useState, useEffect} from "react";
import { HomeScreenContainer, MainCardContainer, SwipeContainer } from "./style";


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
         <h1>{props.profile.name}, {props.profile.age}</h1>
        <p>{props.profile.bio}</p>
        </div>
       
      
      </MainCardContainer>

      <SwipeContainer>
      <button onClick={() =>props.denyMatch()}>Deny</button>
      <button onClick={() =>props.acceptMatch()}>Match</button>
      </SwipeContainer>
        
    </HomeScreenContainer>
  )
}

export default HomeScreen; 
