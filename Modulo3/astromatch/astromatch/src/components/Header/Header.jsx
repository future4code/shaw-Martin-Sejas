import React, {useState, useEffect} from "react";
import { HeaderContainer } from "./style";




 const Header = (props) => {
 
  let buttonText; 

  if (props.page === "HomeScreen") buttonText = "Matches"; 
  else buttonText = "Home"; 
  
  return (
    <HeaderContainer>
        <div><h2>AstroMatch</h2></div>
        <button onClick={props.changePage}>{buttonText}</button>
        <hr/>
    </HeaderContainer>
  )
}

export default Header; 