import React from "react";
import {theme} from './constants/theme'
import {ChakraProvider} from '@chakra-ui/react'
import GlobalStyle from "./constants/globalStyles";

function App() {

  return (
    
    <ChakraProvider theme={theme}>
      <GlobalStyle/>
      
      <App>

      </App>
     
    </ChakraProvider>
  );
}

export default App;
