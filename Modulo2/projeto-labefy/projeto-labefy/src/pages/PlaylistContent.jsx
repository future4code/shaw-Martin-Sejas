import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styling";
import { addTrackToPlaylist, getPlaylistTracks, removeTrackFromPlaylist } from "../services/requests";
import SongCard from "../components/SongCard";


const PlaylistContentContainer = styled.div`
display: flex; 
flex-direction: column;
flex-grow: 1;  
border-left: solid ${COLORS.fontPrimary} 0.1vw; 

background-color: ${COLORS.secondary}; 
`

const PlaylistContentHeader = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
height: 15%; 
color: ${COLORS.fontPrimary};
margin-bottom:6%; 


h1 
{
    align-self: center; 
    padding-top: 2%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem; 
}

`

const PlaylistOptions = styled.div`
    display: flex; 
    align-self: flex-end; 
    align-items: center;
    justify-content: space-around;
    width: 100%; 
    padding-top: 1%; 
    
    button 
    {
        padding: 0.5% 01%;
        font-size: 1.1rem; 
        background-color: ${COLORS.primary}; 
        color: ${COLORS.fontPrimary}; 
        font-weight: 700;
    }

    input {
        width:20%; 
        padding: 0.5% 0.5%;
        font-size: 1.2rem;
    }

    audio 
    {
        width:60%;
        height: 2rem; 
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
margin-bottom: 3%;
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
        deletedSong: true,
        searchSongInput: "", 
        currentSongUrl: "",
        songPlaying: false, 
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

        if(prevState.addingSong !== this.state.addingSong)
        {
            getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs);
        }

        if(prevState.deletedSong !== this.state.deletedSong)
        {
            getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs);
        }
    }

    deleteSong = (song, playlist) => 
    {
        if(window.confirm("Are you sure you want to delete this song?"))
        {
            removeTrackFromPlaylist(playlist, song);
            this.setState({deletedSong: !this.state.deletedSong})
            getPlaylistTracks(this.props.playlistId, this.savePlaylistSongs)
            
        }  
    }

    addNewTrack = () => {
        let body = {
            name: this.state.songNameInput, 
            artist: this.state.artistInput,
            url: this.state.songURLinput,
          }

          addTrackToPlaylist(this.props.playlistId, body);
          this.setState({songNameInput: "", artistInput: "", songURLinput: ""})
          this.addSongButton(); 
       

    }

    playSong = (songUrl) => {
        console.log("clicado", songUrl)
        this.setState({currentSongUrl: songUrl, songPlaying: true});

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


       let displaySongs = []; 

       //controlling song
       if(this.state.songs.length !== 0)
       {
           
           if(this.state.searchSongInput === "") {
               displaySongs = this.state.songs.map( (track) => {
                  return ( <SongCard key={track.id} 
                   id = {track.id}
                   name = {track.name} 
                   artist={track.artist} 
                   url= {track.url}
                   deleteSong = { (songId) => this.deleteSong(songId, this.props.playlistId)}
                   playSong = { (songUrl) => { this.playSong(songUrl)}}
                   />)
               })
           } else {
               let myFilter; 
                myFilter = this.state.songs.filter( (track) => {
                    return track.name.toLowerCase().includes(this.state.searchSongInput.toLocaleLowerCase())
                }).map( (track) => 
                {
                    return ( <SongCard key={track.id} 
                        id = {track.id}
                        name = {track.name} 
                        artist={track.artist} 
                        url= {track.url}
                        deleteSong = { (songId) => this.deleteSong(songId, this.props.playlistId)}
                        playSong = { (songUrl) => { this.playSong(songUrl)}}
                        />)
                }); 

                if (myFilter.length > 0)
                {
                    displaySongs = [...myFilter]; 
                }            
           }
       }

       
       
        return(

            <PlaylistContentContainer>

                <PlaylistContentHeader>
                    
                    <PlaylistOptions>
                       <audio controls src= {this.state.currentSongUrl} autoPlay></audio>
                        <button onClick={() => this.addSongButton()}>+ Add Song</button>
                        <input placeholder="search song..." value={this.state.searchSongInput} onChange={(event) => {this.setState({searchSongInput: event.target.value})}}/>
                    </PlaylistOptions>
                    

                 {this.props.playlistName.length === 0 ? <h1>Welcome to Labefy! To get started, select a playlist or create one.</h1>: <h1>{this.props.playlistName}</h1>}
               
                </PlaylistContentHeader>

                 <SongCardContainer>
                 {this.state.addingSong ? addSongForm:  <span></span>}
                  {this.state.songs.length === 0 && this.props.playlistName.length > 0 && this.state.addingSong === false? <div><h2>[No songs around here...   press (+ Add Song) to add new songs!]</h2> </div> : <span></span> }
                  {displaySongs}
                 </SongCardContainer>

            </PlaylistContentContainer>
        )
    }

}