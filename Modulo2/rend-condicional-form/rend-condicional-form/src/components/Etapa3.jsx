import React from "react";
import styled from 'styled-components';
import MensagemAberta from "./MensagemAberta";
import MensagemFechada from "./MensagemFechada";

const Etapa3Container = styled.div`
    
    display: flex; 
    flex-direction: column;
    padding-top: 1%;
    
    h3 {
        padding-bottom: 5%; 
    }
     input {
        width: 50%;
    }

   
`


export default class Etapa3 extends React.Component 
{
    render () 
    {
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
            <Etapa3Container>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <MensagemAberta
                 pergunta = "5. Por que você não terminou um curso de graduação?"
                 tipo = "text"
                 getText = {this.props.inputCursoGraduacao}
                 inputText = {this.props.inputValues}
                 errorText = "Por favor digite razão por não terminar curso"
                 showErrorText = {!this.props.inputValues && this.props.triedSubmission}
                />
                  <MensagemFechada
                pergunta = "6. Qual a sua escolaridade"
                options = {[{ id: 5, name: "Curso técnico"},
                            {id: 6, name: "Cursos de inglês"},
                            {id: 7, name: "Não fiz curso complementar"}
                        ]}
                />
            </Etapa3Container>
        );
    }
}