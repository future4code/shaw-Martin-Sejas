import React from "react";
import Cadastro from "./Componentes/Cadastro";
import Lista from "./Componentes/Lista";
import styled from "styled-components";
import axios from "axios";


let MainContainer = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
width: 100vw; 


button {
  align-self: center; 
  width: 15%; 
}

`

export default class App extends React.Component {

  state = {
    loggedIn: false,
  }

  render() {

    let showPage = <Cadastro/>; 
    let buttonText = "Lista de Usuarios"; 
    if(this.state.loggedIn) 
    {
      showPage = <Lista/>
      buttonText="Cadastro"
    }


    return ( 
      <MainContainer>

      {showPage}
      <button onClick={ () => {this.setState({loggedIn: !this.state.loggedIn})}}>{buttonText}</button>
      </MainContainer>
    );

  }
}