import React, {useState, useEffect} from "react";
import { HomeScreenContainer, MainCardContainer, SwipeContainer } from "./style";


//receive from props card id

export default function HomeScreen() {

  return (
    <HomeScreenContainer>
      <MainCardContainer>
      
      </MainCardContainer>

      <SwipeContainer>
      <button>Deny</button>
      <button>Match</button>
      </SwipeContainer>
        
    </HomeScreenContainer>
  )
}
