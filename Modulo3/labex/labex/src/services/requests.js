import axios from "axios";
import {useEffect, useState} from "react";



const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/martin-sejas/";
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkladGUxdmVGaHdRb0hnZ2tUbWlwIiwiZW1haWwiOiJtYXJ0aW5AbGFiZW51LmNvbSIsImlhdCI6MTY1MTA5NjMxOX0.7KR_rJx5ts_6aLDbuw5ILyZnYvrh9X0MFFvN4nOcrwA'
  //martin@labenu.com
  //12345

//   {
//     "success": true,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkladGUxdmVGaHdRb0hnZ2tUbWlwIiwiZW1haWwiOiJtYXJ0aW5AbGFiZW51LmNvbSIsImlhdCI6MTY1MTA4MDE4Mn0.fHgX_euYq9kWtqZZ1WEfY7H5U1RjAUt0Sxxk-Us40lY",
//     "user": {
//         "id": "IZte1veFhwQoHggkTmip",
//         "email": "martin@labenu.com"
//     }
// }


export function useRequestData(url) {
    let [data, setData] = useState(undefined)

        useEffect( () => {
            axios.get(`${BASE_URL}${url}`).then( (response) => {      
                setData(response.data)
            }).catch( (error) => {
                alert(error)
            })
        }, [])

        return data; 

}

export function useRequestDataAuth(url, token) {
    let [data, setData] = useState(undefined)
        useEffect( () => {
            axios.get(`${BASE_URL}${url}`, {
                headers: { 
                    'auth': token
                  }
            }).then( (response) => {      
                setData(response.data)
            }).catch( (error) => {
                alert(error)
            })
        }, [])

        return data; 

}


export const Login = async(body) => {

  
    try { 
    const response = await axios.post(`${BASE_URL}login`,body);
    let loginResponse = {
        success: false,
        token: ""
    }
        loginResponse['success'] = response.data.success; 
        loginResponse['token']= response.data.token; 
        return(loginResponse)
    }
    catch(error)  {
        let loginResponse = {
            success: false,
            token: ""
        }
        loginResponse.success = false;
        loginResponse.token = ""; 
        
    }

  
}