import React from "react";
import { HeaderContainer } from "./style";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {BsPeopleFill} from 'react-icons/bs'



 const Header = (props) => {
 
  let buttonText; 

  let matchesButton = <Button leftIcon={<Icon as= {BsPeopleFill}/>}  onClick = {props.changePage}>Matches</Button>; 
  let homeButton; 

  if (props.page === "HomeScreen") buttonText = "Matches"; 
  else buttonText = "Home"; 
  
  return (
    <HeaderContainer>
        <div><h2>AstroMatch</h2></div>
        {/* <button onClick={props.changePage}>{buttonText}</button> */}
        {matchesButton}
        
    </HeaderContainer>
  )
}

export default Header; 