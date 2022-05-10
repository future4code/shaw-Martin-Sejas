import axios from "axios";

const BASE_URL = "https://labeddit.herokuapp.com/"

export const  attemptLogin  = async ( body, setFailedLogin) =>  {

    try{
        const response = await axios.post(`${BASE_URL}users/login`,body); 
        console.log(response)

    }
    catch(error){
        setFailedLogin(true); 
    }
}

// demo_email: demo.email@gmail.com
// demo_pass: demo.password