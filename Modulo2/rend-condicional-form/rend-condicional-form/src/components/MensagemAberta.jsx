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

`

export default class MensagemAberta extends React.Component 
{
    state = {
        inputText: "", 
    }
    
    render () 
    {
        
        return(
            <MsgAbertaContainer>
                <p>{this.props.pergunta} </p>
                <input type={this.props.tipo} 
                onChange= { (event) => this.setState({inputText: event.target.value})}
                value = {this.state.inputText}
                />
            </MsgAbertaContainer>
        );
    }
}