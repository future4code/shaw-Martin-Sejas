import React, {useState, useEffect} from "react";
import { HomeScreenContainer, MainCardContainer, SwipeContainer } from "./style";
import denyPic from "../../assets/deny-emoji.svg";
import acceptPic from "../../assets/accept-emoji.svg";
import { Heading } from "@chakra-ui/react";
import { fadeOutLeft, fadeOutRight} from "react-animations";
import styled, {keyframes} from "styled-components";





//receive from props card id
//props = profile

 const HomeScreen = (props) => {
   let [accept, setAccept] = useState(props.deny); 
  let  [deny, setDeny] = useState(props.deny);
  let [animation, setAnimation] = useState(props.deny);
 

  useEffect( () => {
    setDeny(false)
    setAnimation(false)
    setAccept(true)
  }, [props])

  const fadeLeft = keyframes`${fadeOutLeft}`; 
  const fadeRight = keyframes`${fadeOutRight}`; 

console.log(fadeLeft)
  return (
    <HomeScreenContainer>

      <MainCardContainer 
      style = {{
        backgroundImage: `url(${props.profile.photo})`,
        backgroundSize: "100% 100%",
       
         
      }}
      deny = {deny}
      shouldAnimate = {animation}
      fadeLeft = {fadeLeft}
      fadeRight = {fadeRight}
      >
       
        
       <div> 
         <Heading size='lg'>{props.profile.name}, {props.profile.age}</Heading>
        <p>{props.profile.bio}</p>
        </div>
       
      
      </MainCardContainer>
      <SwipeContainer>
      <img  src= {denyPic} alt= "X" onClick={() =>  {setDeny(true); setAnimation(true);  props.denyMatch(); }}></img>
      <img  src= {acceptPic} alt= "heart" onClick={() =>{setAccept(true); setAnimation(true); props.acceptMatch()}}></img>
      </SwipeContainer>
        
    </HomeScreenContainer>
  )
}

export default HomeScreen; 
