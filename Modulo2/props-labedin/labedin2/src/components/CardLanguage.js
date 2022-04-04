import React from "react";
import styled from "styled-components";


let CardLanguageDiv = styled.div
    `

    display: flex; 
    align-items: center; 
    border: 1px black solid;
    background-color: wheat;
    


    img {
        width: 3vw;
        padding: 1%; 
    }

    div 
    {
        
        padding-left: 3%;
    }

    p 
    {
        
    }

`;

function CardLanguage(props) {
    return (

        <CardLanguageDiv>
            <img src={props.flag} />
            <div>
                <p> <b>{props.language}</b>    -    Habilidade: {props.level}</p>
            </div>

        </CardLanguageDiv>

    )
}

export default CardLanguage; 