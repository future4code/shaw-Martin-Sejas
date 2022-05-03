import React from "react";
import { HeaderContainer } from "./style";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {BsPeopleFill} from 'react-icons/bs'; 
import {MdSwipe} from 'react-icons/md';
import {GiGlassHeart} from 'react-icons/gi'



 const Header = (props) => {
 


  let matchesButton = <Button leftIcon={<Icon as= {BsPeopleFill}/>} onClick = {props.changePage}>Matches</Button>; 
  let homeButton = <Button leftIcon={<Icon as= {MdSwipe}/>}  onClick = {props.changePage}>Profiles</Button>; 

  let renderedButton; 
  if (props.page === "HomeScreen") renderedButton = matchesButton; 
  else renderedButton = homeButton; 
  
  return (
    <HeaderContainer>
        <div> <span> <Icon as = {GiGlassHeart}/> </span> <h2>Astro<span id= "match">Match</span> </h2>  </div>
        {renderedButton}
        
    </HeaderContainer>
  )
}

export default Header; 