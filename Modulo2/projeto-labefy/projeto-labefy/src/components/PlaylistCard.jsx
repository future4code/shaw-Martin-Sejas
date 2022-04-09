import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLORS } from "../constants/styling";

const PlaylistCardContainer = styled.div`
display: flex; 
justify-content: space-between;
align-items: center; 
padding: 0% 5%; 
width: 90%; 
min-height: 6%;
margin-top: 0.5%;
border-top: white 0.15vh groove;
background-color: ${COLORS.primary};
color: ${COLORS.fontPrimary};

&:hover 
{
    background-color: ${COLORS.primary};
    opacity: 0.87; 
}

button 
{
    max-height:65%; 
    padding-bottom: 5%; 
    &:hover{
        background-color: ${COLORS.buttonHoverPrimary}; 
    }
    background-color: ${COLORS.secondary};
    border-color: none; 
    color: white; 
}
`






export default class PlaylistCard extends React.Component {

    render(){
        return(

            <PlaylistCardContainer onClick= {this.props.processClick}> {this.props.name} <button onClick={() => this.props.deletePlaylist(this.props.playlistID)}>X</button> </PlaylistCardContainer>
        )
    }

}