import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants/styling";
import LabefyMain from "./pages/LabefyMain";


const MainAppContainer = styled.div`
margin:0; 
padding:0; 
box-sizing: border-box;
display: flex; 
flex-direction: column; 
background-color: ${COLORS.secondary}; 
height: 100vh; 
width: 100vw; 
`

const Header = styled.div`
height: 7%; 
width: 100%;
display: flex; 
background-color: ${COLORS.primary}; 
align-items: center; 
justify-content: center; 
color: ${COLORS.fontPrimary}; 

`

const Footer = styled.div`
height: 4%; 
width: 100%;
display: flex; 
background-color: ${COLORS.primary}; 
align-items: center; 
justify-content: center; 
border-top: solid white 0.1vh;
color: ${COLORS.fontPrimary}; 

`




export default class App extends React.Component
{
  render() {




    return (
      <MainAppContainer>
        <Header>
          <h1>LABEFY</h1>
        </Header>

        <LabefyMain>

        </LabefyMain>

        <Footer>
          <h3>Created by Martin Sejas @ 2022</h3>
        </Footer>
        
      </MainAppContainer>
    );
  }
}


