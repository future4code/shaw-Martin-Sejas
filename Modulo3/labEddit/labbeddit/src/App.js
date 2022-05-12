import React from "react";
import "@fontsource/noto-sans";
import "@fontsource/ibm-plex-sans";
import {theme} from './constants/theme';
import {ChakraProvider} from '@chakra-ui/react';
import GlobalStyle from "./constants/globalStyles";
import AppRoutes from "./services/Routes/AppRoutes";
import GlobalState from "./contexts/GlobalContext/GlobalState";

function App() {
 
  return (
    <ChakraProvider theme={theme}>

      <GlobalStyle/> 

      <GlobalState>

        <AppRoutes/> 

      </GlobalState>

    </ChakraProvider>
  );
}

export default App;
