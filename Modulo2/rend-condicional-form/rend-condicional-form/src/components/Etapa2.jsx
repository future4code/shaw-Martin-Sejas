import React from "react";
import styled from 'styled-components';
import MensagemAberta from "./MensagemAberta";

const Etapa2Container = styled.div`
    
    display: flex; 
    flex-direction: column;
    padding-top: 1%;
    
    h3 {
        padding-bottom: 5%; 
    }
`

// inputCurso
//  inputUnidadeEnsino

export default class Etapa2 extends React.Component 
{
    render () 
    {
        
        let myInputs = [...this.props.inputValues]; 
        
        /* MENSAGENS ABERTAS
          =====================
         Tem as seguintes props: 
       - Pergunta do formulario
       - Tipo de input
       - props direcionando pro pai onChange
       - Texto preenchendo o input do pai
       - mensagem de error personalizada
       - boolean decidindo se mostrar mensagem de erro ou não  */

        return(
            <Etapa2Container>
                 <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <MensagemAberta
                pergunta = "5. Qual curso?"
                tipo = "text"
                getText = {this.props.inputCurso}
                inputText = {myInputs[0]}
                errorText = "Por favor digite o seu curso"
                showErrorText = {!myInputs[0] && this.props.triedSubmission}
                />
                <MensagemAberta
                pergunta = "6. Qual a unidade de ensino?"
                tipo = "text"
                getText = {this.props.inputUnidadeEnsino}
                inputText = {myInputs[1]}
                errorText = "Por favor digite a sua unidade de ensino"
                showErrorText = {!myInputs[1] && this.props.triedSubmission}
                />
            </Etapa2Container>
        );
    }
}