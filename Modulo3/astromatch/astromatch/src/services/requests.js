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

