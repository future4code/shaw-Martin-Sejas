import React from "react";
import styled from 'styled-components';

const MyOption = styled.div`

display: flex;
flex-direction: column;  
align-self: center; 
justify-self: center; 

margin: 5%; 

select {
    align-self: center; 
    justify-self: center; 
    margin: 5%; 
}

`


export default class MensagemFechada extends React.Component 
{
   
    render () 
    {
        
        let myOptions = this.props.options.length > 0 && this.props.options.map( (opcao,i) => {
          
            return (<option key = {i} value = {opcao.id}> {opcao.name}</option> )
        });

        return(
            <MyOption onChange={this.props.optionSelection}>
                <p>{this.props.pergunta} </p>
                 <select >
                  {myOptions}
                </select> 
            </MyOption>
        );
    }
}