import React from 'react';
import styled from "styled-components"; 
import FormHeader from './components/FormHeader/FormHeader';
import MainDataDisplay from './components/MainDataDisplay/MainDataDisplay';

const AppDiv = styled.div`
  
  width: 100vw; 
  height: 100vh; 
  margin: -8px; 
  padding: 0px;
  box-sizing: border-box; 
  font-family:  Arial, sans-serif;
`

function App() {
  return (
    <AppDiv >
     <FormHeader>
     </FormHeader>
     <MainDataDisplay>

     </MainDataDisplay>
     
    </AppDiv>
  );
}

export default App;
