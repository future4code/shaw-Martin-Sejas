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
   let [accept, setAccept] = useState(props.acceptStatus); 
  let  [deny, setDeny] = useState(props.denyStatus);
  let [animation, setAnimation] = useState(props.denyStatus);
  let [animationCount, setAnimationCount] = useState(1)
 

  useEffect( () => {
    setDeny(false)
    setAnimation(false)
    setAccept(false)
    setAnimationCount(animation+1)
  }, [props])

  const fadeLeft = keyframes`${fadeOutLeft}`; 
  const fadeRight = keyframes`${fadeOutRight}`; 

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
      animationCount = {animationCount}
      >
       
        
       <div> 
         <Heading size='lg'>{props.profile.name}, {props.profile.age}</Heading>
        <p>{props.profile.bio}</p>
        </div>
       
      
      </MainCardContainer>
      <SwipeContainer>
      <img  src= {denyPic} alt= "X" onClick={() =>  {setDeny(true); setAnimation(true);  setTimeout(() => {props.denyMatch()},2000 )}}></img>
      <img  src= {acceptPic} alt= "heart" onClick={() =>{setAccept(true); setAnimation(true); setTimeout(() => {props.acceptMatch()},2000 )}}></img>
      </SwipeContainer>
        
    </HomeScreenContainer>
  )
}

export default HomeScreen; 
