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
    console.log("my id is", id)
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, header)
    .then( )
    .catch( (err) => alert(`${err}, please try again`))

}
