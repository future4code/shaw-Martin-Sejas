import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styling";
import Playlists from "./Playlists";
import PlaylistContent from "./PlaylistContent";


const LabMainContainer = styled.div`

display: flex; 
width: 100%; 
height: 89%;
background-color: ${COLORS.secondary};
`




export default class LabefyMain extends React.Component {

    state={
        selectedPlaylist: false, 
        selectedPlaylistName: "",
        selectedPlaylistId: "", 
    }

    processPlaylistSelection = (id, name) => 
    {
        this.setState({selectedPlaylist: true, selectedPlaylistName: name, selectedPlaylistId: id})
    }




    render(){

        return(

            <LabMainContainer>

            <Playlists selectPlaylist = {(id, name) => this.processPlaylistSelection(id,name)}/>
            
            <PlaylistContent 
            playlistName = {this.state.selectedPlaylistName}
            playlistId = {this.state.selectedPlaylistId}
            />
                

            </LabMainContainer>
        )
    }

}