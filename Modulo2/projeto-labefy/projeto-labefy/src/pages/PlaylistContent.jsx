import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styling";
import { addTrackToPlaylist, getPlaylistTracks, removeTrackFromPlaylist } from "../services/requests";
import SongCard from "../components/SongCard";


const PlaylistContentContainer = styled.div`
display: flex; 
flex-direction: column;
height: 100%; 
flex-grow: 1;  
overflow-y: auto;
border-left: solid ${COLORS.primary} 0.5vw; 
background-color: ${COLORS.secondary}; 
`

const PlaylistContentHeader = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
height: 15%; 
color: ${COLORS.fontPrimary};


h1 
{
    align-self: center; 
    padding-top: 2%;
}

`

const PlaylistOptions = styled.div`
    display: flex; 
    align-self: flex-end; 
    align-items: center;
    justify-content: space-around;
    width: 50%; 
    padding-top: 1%; 
    
    button 
    {
        padding: 0.5% 5%;
        font-size: 1.1rem; 
    }

    input {
        width: 45%; 
        padding: 0.5% 0.5%;
        font-size: 1.2rem;
    }

`

const SongCardContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 100%; 
    height:85%;
    overflow-y: auto;
    align-items: center; 
    padding-bottom: 2.5%; 
    padding-top: 5%; 

    h2 
    {
        color: ${COLORS.fontSecondary}; 
    }
`

const AddSongContainer = styled.div`

display: flex; 
flex-direction: column; 
align-self: center; 
justify-self: center; 
width: 30%; 
margin-top: 1%; 
padding: 1.5% 1.5%; 
border: ${COLORS.primary} double 0.5vh; 

label {
    padding-bottom: 2%; 
}

input {
    margin-bottom: 5%; 
}

h2 {
    align-self: center; 
}

button {
    width: 25%; 
    align-self: center; 
}

    
`

//PROPS
// playlist name: this.props.playlistName
// playlist id: this.props.playlistId



export default class PlaylistContent extends React.Component {

    state = {
        songs: [], 
        songNameInput: "", 
        artistInput: "", 
        songURLinput: "",
        addingSong: false,
    }

    savePlaylistSongs= (data) => {
        this.setState({songs: data})
    }

    addSongButton = () => {
        this.setState({addingSong: !this.state.addingSong})
        getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs)
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevProps.playlistId !== this.props.playlistId)
        {
            getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs);
        }

        if(prevState.songs.length !== this.state.songs.length)
        {
            getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs);
        }
    }

    deleteSong = (song, playlist) => 
    {
        if(window.confirm("Are you sure you want to delete this song?"))
        {
            removeTrackFromPlaylist(playlist, song);
            
        }

        getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs)
    }

    addNewTrack = () => {

        let body = {
            name: this.state.songNameInput, 
            artist: this.state.artistInput,
            url: this.state.songURLinput,
          }

          addTrackToPlaylist(this.props.playlistId, body);
          this.addSongButton(); 
       

    }

    render(){

         let addSongForm = <AddSongContainer>
                           <h2>Add Track to Playlist</h2>
                           <label>Song Name:</label>
                           <input placeholder="Song Name"
                            onChange={(event) => {this.setState({songNameInput: event.target.value})}}
                            value={this.state.songNameInput}
                            />
                           <label>Artist Name:</label>
                           <input placeholder="Artist Name"
                            onChange={(event) => {this.setState({artistInput: event.target.value})}}
                            value={this.state.artistInput}
                           />
                           <label>Song URL</label>
                           <input placeholder="Song URL"
                           onChange={(event) => {this.setState({songURLinput: event.target.value})}}
                           value={this.state.songURLinput}
                           />
                           <button onClick={() => {this.addNewTrack()}}>Submit</button>
                          </AddSongContainer>

       console.log("songs:", this.state.songs)

       let displaySongs; 

       if(this.state.songs.length !== 0)
       {
           displaySongs = this.state.songs.map( (track) => {
              return ( <SongCard key={track.id} 
               id = {track.id}
               name = {track.name} 
               artist={track.artist} 
               url= {track.url}
               deleteSong = { (songId) => this.deleteSong(songId, this.props.playlistId)}
               />)
           })
       }
        return(

            <PlaylistContentContainer>

                <PlaylistContentHeader>

                    <PlaylistOptions>
                        <button onClick={() => this.addSongButton()}>+ Add Song</button>
                        <input placeholder="search song..."/>
                    </PlaylistOptions>
                    {this.state.addingSong ? addSongForm:  <span></span>}

                {this.props.playlistName.length === 0 ? <h1>Welcome to Labefy! To get started, select a playlist or create one.</h1>: <h1>{this.props.playlistName}</h1>}
               
                </PlaylistContentHeader>

                <SongCardContainer>
                    <br/>
                {this.state.songs.length === 0 && this.props.playlistName.length > 0 && this.state.addingSong === false? <div><h2>[No songs around here...   press (+ Add Song) to add new songs!]</h2> </div> : <span></span> }
                {displaySongs}
                </SongCardContainer>

            </PlaylistContentContainer>
        )
    }

}