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



export default class Etapa2 extends React.Component 
{
    render () 
    {
        return(
            <Etapa2Container>
                 <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <MensagemAberta
                pergunta = "5. Qual curso?"
                tipo = "text"
                />
                <MensagemAberta
                pergunta = "6. Qual a unidade de ensino?"
                tipo = "text"
                />
            </Etapa2Container>
        );
    }
}