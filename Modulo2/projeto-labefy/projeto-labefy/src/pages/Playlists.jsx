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

const PlaylistsHeader = styled.div`
display: flex; 
color: ${COLORS.fontSecondary};
height: 20%;
width: 100%; 
justify-content: center;
`




export default class Playlists extends React.Component {

    render(){
        return(

            <PlaylistsContainer>
                <PlaylistsHeader>
                    <h2>My Playlists</h2>
                </PlaylistsHeader>

            </PlaylistsContainer>
        )
    }

}