import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLORS } from "../constants/styling";
import { createPlaylist } from "../services/requests";
import PlaylistCard from "../components/PlaylistCard";
import { getAllPlaylists } from "../services/requests";

const PlaylistsContainer = styled.div`
display: flex; 
flex-direction: column;
width: 20%; 
flex-grow: 0;
height:100%;
background-color: ${COLORS.secondary}; 

`

const PlaylistsHeader = styled.div`
display: flex; 
flex-direction: row;
color: ${COLORS.fontSecondary};
background-color: ${COLORS.secondary};

height: 15%;
width: 100%; 
justify-content: space-evenly;
align-items: center; 


button {
    width: 25%; 
    height: 25%;
}
`

const AddPlaylistContainer = styled.div`
display: flex; 
justify-self: center; 
align-self: center; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
background-color: ${COLORS.primary};
border: groove black 0.2vw;
box-shadow: 5% 5% 5%; 
border-radius: 5% 5% 5% 5%; 
width: 90%; 
height: 23%;
color: ${COLORS.fontPrimary};

input {
    margin-bottom: 4%; 
    height: 15%; 
    width: 80%; 
}
`

const PlaylistCardContainer = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%; 
    overflow-y: auto;

`




export default class Playlists extends React.Component {

    state = {
        playlistName: "",
        makingPlaylist: false,
        newPlaylistInput: "",
        playlists: [],
        playlistLength: 0,
    }

    //local update after API request
    updatePlaylists = (data) => {
        this.setState({playlists: data, playlistLength: data.length})
       
    }

    


    // get initial playlists
    componentDidMount() {
        getAllPlaylists(this.updatePlaylists); 

    }

    componentDidUpdate(prevState)
    {
        if(prevState.playlistLength !== this.state.playlistLength)
        {
           getAllPlaylists(this.updatePlaylists)

        }
    }


    //function handling create new playlist button
    addNewPlaylist = () => 
    {
        createPlaylist(this.state.newPlaylistInput);
        getAllPlaylists(this.updatePlaylists);  
        this.addPlaylistButton();
    }

    addPlaylistButton = () => 
    {
        this.setState({makingPlaylist: !this.state.makingPlaylist})
    }

    

    render(){ 
    //div que aparece quando o usuario apertar em add, para fazer o request
        let addPlaylistDiv = 
                           ( <AddPlaylistContainer> 
                            <h3>Create New Playlist</h3>

                            <input placeholder="Playlist Name" 
                            onChange={(event) => {this.setState({newPlaylistInput: event.target.value})}}
                            value={this.state.newPlaylistInput} /> 

                            <button onClick={()=>this.addNewPlaylist(this.state.newPlaylistInput)}>Create</button> 
                            </AddPlaylistContainer>);


        let playlistNames; 
        
        if(this.state.playlists) {
            playlistNames = this.state.playlists.map ( (playlist) => {
                return <PlaylistCard name= {playlist.name} key={playlist.id}/>
            })
        }


        return(

            <PlaylistsContainer>
                <PlaylistsHeader>
                    <h2>My Playlists</h2>
                    <button onClick={() => this.addPlaylistButton()}>Add +</button>
                </PlaylistsHeader>

                {this.state.makingPlaylist ? addPlaylistDiv: <span></span>}

                <PlaylistCardContainer>
                    {this.state.playlists ? playlistNames: <div>Carregando..</div>}
                </PlaylistCardContainer>

            </PlaylistsContainer>
        )
    }

}