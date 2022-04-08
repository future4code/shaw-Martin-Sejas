import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLORS } from "../constants/styling";

const PlaylistContentContainer = styled.div`
display: flex; 
flex-direction: column;
height: 100%; 
flex-grow: 1;  
overflow-y: auto;
border-left: solid ${COLORS.primary} 0.5vw; 
height:100%;
background-color: ${COLORS.secondary}; 

`




export default class PlaylistContent extends React.Component {

    render(){
        return(

            <PlaylistContentContainer>

            </PlaylistContentContainer>
        )
    }

}