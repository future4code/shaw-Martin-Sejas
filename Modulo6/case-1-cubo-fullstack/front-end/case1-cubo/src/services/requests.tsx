import axios from "axios";
import { CuboUser } from "../Types/User";

const BASE_URL = 'https://martinsejas-cubocasestudy.herokuapp.com/'

//API request to register User
export const registerUser = async (newUser:CuboUser) => {
    
         axios.post(`${BASE_URL}users`,newUser).then( (response) => {
           
         }).catch( (error:any) => {console.log(error)})
    
}

//api request to get users list
export const getUsers = async (setUsers:Function, setTotalParticipation:Function) => {
   axios.get(`${BASE_URL}users`).then( (response) => {
      
      setUsers(response.data.users); 
      setTotalParticipation(response.data.totalParticipation)
   }).catch( (error:any) => {
      console.log(error)
   })
}


export const deleteUsers = async () => {
   axios.delete(`${BASE_URL}users`).then( (response) => {
      alert("Users Deleted!")
   }).catch( (error:any) => {
      console.log(error)
   })
}