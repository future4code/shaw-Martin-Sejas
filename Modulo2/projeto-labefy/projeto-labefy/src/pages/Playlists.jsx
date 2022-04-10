import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styling";
import { createPlaylist } from "../services/requests";
import PlaylistCard from "../components/PlaylistCard";
import { getAllPlaylists } from "../services/requests";
import { deleteThisPlaylist } from "../services/requests";

//styling main container
const PlaylistsContainer = styled.div`
display: flex; 
flex-direction: column;
width: 21%; 
flex-grow: 0;
max-height:100%;
background-color: ${COLORS.secondary}; 

hr {
    width: 80%;
}

`
//styling container header
const PlaylistsHeader = styled.div`
display: flex; 
flex-direction: row;
color: ${COLORS.fontPrimary};
background-color: ${COLORS.secondary};

height: 15%;
width: 100%; 
justify-content: space-evenly;
align-items: center; 


button {
    width: 15%; 
    height: 45%;
    font-size: 2.1rem;
    background-color: ${COLORS.primary}; 
    color: ${COLORS.fontPrimary};
    border-radius: 25% 25%; 
}

h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
`
//styling of pop-up add playlist container
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
width: 95%; 
height: 25%;
margin-bottom: 5%; 
padding-bottom: 3%; 
color: ${COLORS.fontPrimary};
font-weight: 800;

input {
    margin-bottom: 4%; 
    height: 15%; 
    width: 80%; 
}

p 
{
    color: red; 
}
`
//styling of container holding cards
const PlaylistCardContainer = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%; 
    overflow-y: auto;
    align-items: center; 
    padding-bottom: 2.5%; 
    padding-top: 2.5%; 

`




export default class Playlists extends React.Component {

    state = {
        playlistName: "",
        makingPlaylist: false,
        newPlaylistInput: "",
        playlists: [],
        playlistLength: 0,
        playlistDeleted: false,
        validPlaylistName: true, 
    }

    //local update after API request
    updatePlaylists = (data) => {
        this.setState({playlists: data, playlistLength: data.length})
       
    }

    // get initial playlists
    componentDidMount() {
        getAllPlaylists(this.updatePlaylists); 

    }

    //need to update if playlist got deleted
    componentDidUpdate(prevState) 
    {
        if(prevState.playlistDeleted !== this.state.playlistDeleted)
        {
            getAllPlaylists(this.updatePlaylists);
        }
    }

    //function handling create new playlist button
    addNewPlaylist = () => 
    {
        if(this.state.newPlaylistInput !== "")
        {
        this.setState({validPlaylistName: true})
        createPlaylist(this.state.newPlaylistInput);
        getAllPlaylists(this.updatePlaylists);  
        this.addPlaylistButton();
        }

        else 
        {
            this.setState({validPlaylistName: false})
        }
    }

    //logic for add playlist button
    addPlaylistButton = () => 
    {
        this.setState({makingPlaylist: !this.state.makingPlaylist, newPlaylistInput:"", validPlaylistName: true})
        getAllPlaylists(this.updatePlaylists)
    }

    //delete playlist button
    deletePlaylist = (playlistId) => {
       if( window.confirm("Tem certeza que quer deletar?")) {    
           deleteThisPlaylist(playlistId); 
           this.setState({playlistDeleted: !this.state.playlistDeleted})
       }

    }
   
    render(){ 
    //div que aparece quando o usuario apertar em add, para fazer o request
        let addPlaylistDiv = 
                           ( <AddPlaylistContainer> 
                            <h3>Create New Playlist</h3>
                            {this.state.validPlaylistName? <span></span> : <p>* Playlist name can't be empty</p>}
                            <input placeholder="Playlist Name" 
                            onChange={(event) => {this.setState({newPlaylistInput: event.target.value})}}
                            value={this.state.newPlaylistInput} /> 

                            <button onClick={()=>this.addNewPlaylist(this.state.newPlaylistInput)}>Create</button> 
                            </AddPlaylistContainer>);


        let playlistNames; 
        
        if(this.state.playlists) {
            playlistNames = this.state.playlists.map ( (playlist) => {
                return <PlaylistCard name= {playlist.name} 
                                    key={playlist.id} 
                                    playlistID = {playlist.id} 
                                    deletePlaylist = {(id) => this.deletePlaylist(id)}
                                    processClick= {() => {this.props.selectPlaylist(playlist.id, playlist.name)}}
                                    />
            })
        }


        return(

            <PlaylistsContainer>
                <PlaylistsHeader>
                    <h2>My Playlists</h2>
                    <button onClick={() => this.addPlaylistButton()}>+</button>
                </PlaylistsHeader>

                {this.state.makingPlaylist ? addPlaylistDiv: <span></span>}
                <hr/>
                <PlaylistCardContainer>
                    {this.state.playlists ? playlistNames: <div>Carregando..</div>}
                </PlaylistCardContainer>

            </PlaylistsContainer>
        )
    }

}