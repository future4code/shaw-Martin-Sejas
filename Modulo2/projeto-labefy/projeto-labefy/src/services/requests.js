import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants/urls";

//header geral
const header = {
    headers: {
        Authorization: "martin-sejas-shaw"
    }
}

//fucnao geral de fazer playlist com nome de input
export const createPlaylist = (playlistName) => {
   let body = {
        name: playlistName
    }

    axios.post(BASE_URL, body, header)
    .then( (response) => {
        //alert(`Playlist: ${playlistName} created successfully!`) 
    }).catch( (err) => {
        console.log(err.response)
        alert(`Error: ${err.response.data.message} Please try again`)
    })
}

export const getAllPlaylists = (savePlaylist) => 
{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", header)
    .then( (response) => {  savePlaylist(response.data.result.list) })
    .catch( (err) => alert(`${err}, please try a different name`))
}

export const deleteThisPlaylist = (id) => 
{
    
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, header)
    .then( )
    .catch( (err) => alert(`${err}, please try again`));
}

export const addTrackToPlaylist = ( id, body ) => 
{
    axios.post(`${BASE_URL}${id}/tracks`,body, header)
    .then( (response) => {
        alert("Song added to playlist successfully")
    }).catch( (err) => alert(`${err}, please check input info`))
}

export const getPlaylistTracks = (id, savePlaylistSongs) => 
{
    axios.get(`${BASE_URL}${id}/tracks`, header )
    .then( (response) => {
        savePlaylistSongs(response.data.result.tracks);
    }).catch( (err) => alert(`${err}, please check input info`));
}

export const removeTrackFromPlaylist = (playlistId, songId) => 
{
    axios.delete(`${BASE_URL}${playlistId}/tracks/${songId}`, header)
    .then( (response) => {
        alert("Song deleted")
    }).catch((err) => alert(`${err}, please try again`))
}




