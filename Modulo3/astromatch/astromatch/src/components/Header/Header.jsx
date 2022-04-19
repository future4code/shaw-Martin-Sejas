import React, {useState, useEffect} from "react";
import { HeaderContainer } from "./style";




 const Header = (props) => {

  return (
    <HeaderContainer>
        <div><h2>AstroMatch</h2></div>
        <button onClick={props.changePage}>Switch</button>
        <hr/>
    </HeaderContainer>
  )
}

export default Header; 