import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLORS } from "../constants/styling";

const PlaylistsContainer = styled.div`
display: flex; 
flex-direction: column;
width: 20%; 
flex-grow: 0;
overflow-y: auto;
height:100%;
background-color: ${COLORS.secondary}; 

`

const PlaylistsHeaeder = styled.div`
color: ${COLORS.fontSecondary}
`




export default class Playlists extends React.Component {

    render(){
        return(

            <PlaylistsContainer>

            </PlaylistsContainer>
        )
    }

}