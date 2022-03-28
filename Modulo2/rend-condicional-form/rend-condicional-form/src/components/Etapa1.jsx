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
        return(
            <Etapa1Container>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <MensagemAberta
                pergunta = "1. Qual o seu nome?"
                tipo = "text"
                />
                <MensagemAberta
                pergunta = "2. Qual o sua idade?"
                tipo = "number"
                />
                <MensagemAberta
                pergunta = "3. Qual o seu email?"
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