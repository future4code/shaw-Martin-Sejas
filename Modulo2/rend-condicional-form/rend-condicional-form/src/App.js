import './App.css';
import styled from 'styled-components';
import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

const MainContainer = styled.div`

display: flex; 
flex-direction: column; 
align-items: center;
justify-content: center; 

`



export default class App extends React.Component {

  state = {
    currentPage: "Etapa1",
    showPage: "Etapa1", 
    buttonText: "Proxima Etapa",
    //para definir se vai para a etapa2 ou etapa3 da Etapa1
    pularEtapa2: false,
  }

  //button text adapts depending on page
  // add logic to switch statement
  lerEscolaridade = (event) => {

    //se tiver ensino superior pode pular escolaridade
    if (event.target.value == "3" || event.target.value == "4")
    {
      this.setState({pularEtapa2: true}); 
    }
  }

  changePage = () => {
    if (this.state.currentPage === "Etapa1")
    {
      let renderPage = this.state.pularEtapa2 ? "Etapa2":"Etapa3";
      this.setState({ currentPage: this.state.renderPage, showPage: renderPage, buttonText: "Finalizar"})
    }

    else 
    {
      let renderPage = "Etapa4"; 
      this.setState({currentPage: this.state.showPage, showPage: renderPage})
    }
  }

  
 render() {

  let renderedPage = ""

  switch (this.state.showPage) 
  {
    case "Etapa1":
      renderedPage = <Etapa1 readOption = {this.lerEscolaridade}/>;
      break;

    case "Etapa2": 
    renderedPage = <Etapa2/>
    break;

    case "Etapa3": 
    renderedPage = <Etapa3/>
    break;

    case "Etapa4": 
    renderedPage = <Etapa4/>
    break;

     default:
       <p>Erro 404</p>;
       break; 

  }

  if(this.state.showPage === "Etapa4"); 
  return (
    <MainContainer>
    {renderedPage} {/*mostar a pagina renderizada*/}
    {this.state.showPage !== "Etapa4" ? <button onClick={this.changePage}>{this.state.buttonText}</button> : <span></span>}  {/*se for Etapa4 tirar botao*/}
    </MainContainer>
  );

 }
};


