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
    //para definir se vai para a etapa2 ou etapa3 desde a Etapa1
    irParaEtapa2: false,
    //aqui controlamos diretamentos os valores de cada campo do formulario (mensagem aberta), em cada etapa
    etapa1_Inputs: ["","",""], 
    etapa2_Inputs: ["",""], 
    etapa3_Inputs: "", 
    //boolean para mostrar mensagem de erro ou n
    submitted: false, 
    
  }

  
  lerEscolaridade = (event) => { // Processar resultado de selection da Etapa1
    //se tiver ensino superior ir para Etapa2 e não a Etapa3
    if (event.target.value === "3" || event.target.value === "4")
    {
      this.setState({irParaEtapa2: true}); 
    }
  }



  changePage = () => { //Funcao principal de mudanca de pagina

    switch (this.state.showPage) {
    //caso estamos na etapa1
    case "Etapa1":
    {
      //Confirmar que os inputs tenham valores, caso sim, podemos mudar de pagina sem problema
      if( this.state.etapa1_Inputs[0] && this.state.etapa1_Inputs[1] && this.state.etapa1_Inputs[2])
      { 
        //dependendo da escolaridade, vamos para etap2 ou etapa3
        let renderPage = this.state.irParaEtapa2 ? "Etapa2":"Etapa3";
        //reseta tudo
        this.setState({ currentPage: this.state.renderPage, showPage: renderPage, buttonText: "Finalizar", submitted: false});
      }
      else //algum valor de mensagem aberta esta zerado, alert de erro
      {
        this.setState({submitted: true});
        alert("Por favor preencher tudo da Etapa 1");
      }
      break; 
    }

    //caso Etapa2
    case "Etapa2":
    {
      if(this.state.etapa2_Inputs[0] && this.state.etapa2_Inputs[1])
      { 
        let renderPage = "Etapa4";
        this.setState({ currentPage: this.state.renderPage, showPage: renderPage, buttonText: "Finalizar", submitted: false});
      }
      else 
      {
        this.setState({submitted: true});
        alert("Por favor preencher tudo da Etapa 2");
      }
      break; 
    }

    // caso estamos na etapa3
    case "Etapa3":
    {
      if(this.state.etapa3_Inputs)
      { 
        let renderPage = "Etapa4";
        this.setState({ currentPage: this.state.renderPage, showPage: renderPage, buttonText: "Finalizar", submitted: false});
      }
      else 
      {
        this.setState({submitted: true});
        alert("Por favor preencher tudo da Etapa 3");
      }
      break; 
    }
  
    default:
      let renderPage = "Etapa4"; 
      this.setState({currentPage: this.state.showPage, showPage: renderPage});
  }
  };

  
 render() {

  //variavel que vai carregar o componente correto com os props corretos
  let renderedPage = "";

  switch (this.state.showPage) 
  {
    //os inputs sao controlados diretamente aqui por uma arrow function, e mandam os valores como prop
    case "Etapa1":
      renderedPage = (<Etapa1 readOption = {this.lerEscolaridade}
                      inputNome = { (event) => { const etp1Inputs = [...this.state.etapa1_Inputs]; etp1Inputs[0] = event.target.value; this.setState({etapa1_Inputs:etp1Inputs })}}
                      inputIdade= { (event) => { const etp1Inputs = [...this.state.etapa1_Inputs]; etp1Inputs[1] = event.target.value; this.setState({etapa1_Inputs:etp1Inputs })}}
                      inputEmail = { (event) => { const etp1Inputs = [...this.state.etapa1_Inputs]; etp1Inputs[2] = event.target.value; this.setState({etapa1_Inputs:etp1Inputs })}}
                      inputValues = {this.state.etapa1_Inputs}
                      triedSubmission = {this.state.submitted}
                      />)
      break;

    case "Etapa2": 
    renderedPage = (<Etapa2
                      inputCurso = { (event) => {const etp2Inputs = [...this.state.etapa2_Inputs]; etp2Inputs[0] = event.target.value; this.setState({etapa2_Inputs: etp2Inputs})}}
                      inputUnidadeEnsino = { (event) => { const etp2Inputs = [...this.state.etapa2_Inputs]; etp2Inputs[1] = event.target.value; this.setState({etapa2_Inputs: etp2Inputs})}}
                      inputValues = {this.state.etapa2_Inputs}
                      triedSubmission = {this.state.submitted}
                    />)
    break;

    case "Etapa3": 
    renderedPage = (<Etapa3
                      inputCursoGraduacao = { (event) => { this.setState({etapa3_Inputs: event.target.value })}}
                      inputValues = {this.state.etapa3_Inputs}
                      triedSubmission = {this.state.submitted}
                  />)
    break;

    case "Etapa4": 
    renderedPage = <Etapa4/>
    break;

     default:
       <p>Erro 404</p>;
       break; 

  }

  return (
    <MainContainer>
    {renderedPage} {/*mostar a pagina renderizada*/}
    {this.state.showPage !== "Etapa4" ? <button onClick={this.changePage}>{this.state.buttonText}</button> : <span></span>}  {/*se for Etapa4 tirar botao*/}
    </MainContainer>
  );

 }
};


