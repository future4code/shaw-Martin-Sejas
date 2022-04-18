import React from "react";
import styled from "styled-components";
import GlobalStyle from "./constants/globalStyles";
import Screen from "./pages/Screen/Screen";



let MainAppContainer = styled.div`
display: flex; 
height: 100vh; 
width:100vw; 
background-color: yellow; 
align-items: center; 
justify-content: center; 
`



function App() {

  return (
    <MainAppContainer>
      <GlobalStyle/>
      <Screen/>
      
    </MainAppContainer>
  );
}

export default App;
