import React from "react";
import styled from 'styled-components';

const SmallCardContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px black solid;

    img {
        width: 3vw;
        padding: 1%; 
    }

    div {
        padding-left: 3%; 
    }

`


function CardPequeno(props) {


    return (
        <SmallCardContainer>
            <img src={props.imagem} />
            <div>
                <p> <b>{props.infoType}: </b> {props.userInfo}</p>
            </div>
        </SmallCardContainer>

    )

}

export default CardPequeno;