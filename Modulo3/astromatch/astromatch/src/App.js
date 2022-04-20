import React from "react";
import styled from "styled-components";
import GlobalStyle from "./constants/globalStyles";
import Screen from "./pages/Screen/Screen";
import {ChakraProvider} from '@chakra-ui/react'; 


let MainAppContainer = styled.div`
display: flex; 
height: 100vh; 
width:100vw; 
align-items: center; 
background-color: whitesmoke ; 
justify-content: center; 
`



function App() {

  return (
    <ChakraProvider>
    <GlobalStyle/>
    <MainAppContainer>
      <Screen/>  
    </MainAppContainer>
    </ChakraProvider>
  );
}

export default App;
