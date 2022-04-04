import React from "react";
import MensagemAberta from "./MensagemAberta";
import styled from 'styled-components';
import MensagemFechada from "./MensagemFechada";

const Etapa1Container = styled.div`
    
    display: flex; 
    flex-direction: column;
    padding-top: 1%;
    
    
    h3 {
        padding-bottom: 5%; 
    }
`


export default class Etapa1 extends React.Component 
{
   
    render () 
    {
       //Ler inputs do pai dos props
       let myInputs = [...this.props.inputValues]; 

       /* MENSAGENS ABERTAS
       ===========================
       Tem as seguintes props: 
       - Pergunta do formulario
       - Tipo de input
       - props direcionando pro pai onChange
       - Texto preenchendo o input do pai
       - mensagem de error personalizada
       - boolean decidindo se mostrar mensagem de erro ou não 

       */
       
      
        return(
            <Etapa1Container>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <MensagemAberta
                pergunta = "1. Qual o seu nome?"
                tipo = "text"
                getText = {this.props.inputNome}
                inputText = {myInputs[0]}
                errorText = "Por favor digite o seu nome"
                showErrorText = {!myInputs[0] && this.props.triedSubmission}
                />
                <MensagemAberta
                pergunta = "2. Qual o sua idade?"
                tipo = "text"
                getText = {this.props.inputIdade}
                inputText = {myInputs[1]}
                errorText = "Por favor digite a sua idade"
                showErrorText = {!myInputs[1] && this.props.triedSubmission}
                />
                <MensagemAberta
                pergunta = "3. Qual o seu email?"
                tipo = "text"
                getText = {this.props.inputEmail}
                inputText = {myInputs[2]}
                errorText = "Por favor digite o seu email"
                showErrorText = {!myInputs[2] && this.props.triedSubmission}
                />
                <MensagemFechada
                pergunta = "4. Qual a sua escolaridade"
                options = {[{ id: 1, name: "Ensino médio incompleto"},
                            {id: 2, name: "Ensino médio completo"},
                            {id: 3, name: "Ensino superior incompleto"},
                            {id: 4, name: "Ensino superior completo"}
                        ]}
                optionSelection = {this.props.readOption}
                />



            </Etapa1Container>
        );
    }
}