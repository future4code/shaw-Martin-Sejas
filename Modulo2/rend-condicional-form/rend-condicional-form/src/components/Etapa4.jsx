import React from "react";
import styled from 'styled-components';


const Etapa4Container = styled.div`
    
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    padding-top: 1%;
    
    h3 {
        padding-bottom: 5%; 
    }
`

export default class Etapa4 extends React.Component 
{
    render () 
    {
        return(
            <Etapa4Container>
                 <h3>O FORMULÁRIO ACABOU</h3>
                 <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Etapa4Container>
        );
    }
}