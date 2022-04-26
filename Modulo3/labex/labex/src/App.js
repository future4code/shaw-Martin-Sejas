import React from "react";
import "@fontsource/raleway"
import "@fontsource/playfair-display"
import {theme} from './constants/theme'
import {ChakraProvider} from '@chakra-ui/react'
import GlobalStyle from "./constants/globalStyles";
import AppRoutes from "./services/Routes/AppRoutes";



function App() {

  return (
    
    <ChakraProvider theme={theme}>
      <GlobalStyle/>
      
      <AppRoutes/>
      
     
    </ChakraProvider>
  );
}

export default App;
