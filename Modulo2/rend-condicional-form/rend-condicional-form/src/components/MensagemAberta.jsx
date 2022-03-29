import React from "react";
import styled from 'styled-components';

const MsgAbertaContainer = styled.div`
    
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    input {
        margin: 5%; 
        width: 13vw; 
    }

    #error {
        color: red;  
        padding-top: 3%; 
        width: 25vw; 
        text-align: center;
    }

`

export default class MensagemAberta extends React.Component 
{
    render () 
    {
        
        return(
            <MsgAbertaContainer>
                <p>{this.props.pergunta} </p>
                {this.props.showErrorText ? <p id = "error">{this.props.errorText}</p>:<span></span>}
                <input type={this.props.tipo} 
                onChange= {this.props.getText}
                value = {this.props.inputText}
                />
               
            </MsgAbertaContainer>
        );
    }
}