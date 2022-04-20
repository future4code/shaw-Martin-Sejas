import axios from "axios";
import React from "react";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


//!!!!!!!!!!!!CONTROLAR NULL RESPONSES (PERFIS ACABAM)!!!!!!!!
toast.configure()

const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/martin-sejas";

export const getProfileToChoose = (saveProfile) => 
{
    axios.get(`${BASE_URL}/person`)
    .then( (response) => {
       
        saveProfile(response.data.profile);
    }).catch( (err) => alert(`${err}`))
}


export const getMatches = (saveMatches) => {
    axios.get(`${BASE_URL}/matches`).then( (response) => {
        saveMatches(response.data.matches);
    }).catch((err) => alert(`${err}`))
}

export const choosePerson = (id, choice, matchNumber, setMatchNumber) => {

    let body = {
        "id": id, 
        "choice": choice
    }

    axios.post(`${BASE_URL}/choose-person`, body)
    .then( (response) => {
        if(response.data.isMatch) {
            toast.success("Deu Match!"); 
            setMatchNumber(matchNumber+1); 
        }
       
    })
    .catch( (err) => alert(`${err} dando ruim`))
}

export const clearMatches = (setMatches) => {
    axios.put(`${BASE_URL}/clear`)
    .then( (response) => {
        toast.info("Perfil resetado com sucesso!")
        setMatches([]);
    }).catch( (err) => alert(`${err}`))
}

