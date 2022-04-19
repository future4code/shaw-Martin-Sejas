import axios from "axios";

const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/martin-sejas";

export const getProfileToChoose = (saveProfile) => 
{
    axios.get(`${BASE_URL}/person`)
    .then( (response) => {
        console.log(response)
        saveProfile(response.data.profile);
    }).catch( (err) => alert(`${err}`))
}

export const getMatches = (saveMatches) => {
    axios.get(`${BASE_URL}/matches`).then( (response) => {
        saveMatches(response.data.matches);
    }).catch((err) => alert(`${err}`))
}

export const choosePerson = (id, choice) => {

    let body = {
        "id": id, 
        "choice": choice
    }

    axios.post(`${BASE_URL}/choose-person`, body)
    .then( (response) => {
        if(response.data.isMatch) alert("Deu Match!")
       
    })
    .catch( (err) => alert(`${err} dando ruim`))
}

export const clearMatches = () => {
    axios.put(`${BASE_URL}/clear`)
    .then( (response) => {
        alert("Perfil resetado com sucesso!")
    }).catch( (err) => alert(`${err}`))
}

