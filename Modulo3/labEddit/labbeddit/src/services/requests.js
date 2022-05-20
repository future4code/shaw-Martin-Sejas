import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { goToFeed } from "./Routes/coordinates";



//MartinSejas
//martin@labenu.com
//labenu1234

//token
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRkYjRmYTk0LTQyMjEtNDI2Ni1hMDNiLTg4ZmZlNTFiOTVmYiIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1MjIyODU5NCwiZXhwIjoxNjUyMjcxNzk0fQ.HVgTaunVxz7vch32eUVzZV61VJyAhbGdJyl9bGTm_Ys


const BASE_URL = "https://labeddit.herokuapp.com/"

export const  attemptLogin  = async ( body, setFailedLogin) =>  {
    try{
        const response = await axios.post(`${BASE_URL}users/login`,body);
        return (response.data)

    }
    catch(error){
        setFailedLogin(true); 
    }
}

export const  Register = async ( body, navigate) =>  {
    
    try{
        const response = await axios.post(`${BASE_URL}users/signup`,body);
        return(response.data)
        

    }
    catch(error){
      
    }
}

export const  GetPosts = async (url, token, setPostsOnScreen) =>  {

let Header = {
    headers: {
        Authorization: token
    }
}
    
    try{
         const response = await axios.get(`${BASE_URL}${url}`,Header);
         setPostsOnScreen(response.data)
        

    }
    catch(error){
      
    }
}


export const  GetComments = async (url, token, setComments, setCommented) =>  {

    let Header = {
        headers: {
            Authorization: token
        }
    }
        
        try{
             const response = await axios.get(`${BASE_URL}${url}`,Header);
             if(response.data.length > 0) { 
                setComments(response.data)
                setCommented(true); 
             }

             else
             {
                 setComments(["nada", "aqui"]); 
                 setCommented(false); 
             }
            
            
    
        }
        catch(error){
          
        }
    }
    

export const  CreatePost= async ( body, token) =>  {

    let Header = {
        headers: {
            Authorization: token
        }
    }
        
        try{
             const response = await axios.post(`${BASE_URL}posts`,body,Header);
             return(response)
        }
        catch(error){
          
        }
    }

    export const  CreateComment= async ( body, token,id) =>  {

        let Header = {
            headers: {
                Authorization: token
            }
        }
            
            try{
                 const response = await axios.post(`${BASE_URL}posts/${id}/comments`,body,Header);
                 return(response)
            }
            catch(error){
              
            }
        }

    export const  CreatePostVote = async (url, body, token) =>  {

        let Header = {
            headers: {
                Authorization: token
            }
        }
            
            try{
                 const response = await axios.post(`${BASE_URL}${url}`,body,Header);
                 return(response)
            }
            catch(error){
              
            }
        }

        export const  ChangePostVote = async (url, body, token) =>  {

            let Header = {
                headers: {
                    Authorization: token
                }
            }
                
                try{
                     const response = await axios.put(`${BASE_URL}${url}`,body,Header);
                     return(response)
                }
                catch(error){
                  
                }
            }
        
            export const  DeletePostVote = async (url,  token) =>  {

                let Header = {
                    headers: {
                        Authorization: token
                    }
                }
                    
                    try{
                         const response = await axios.delete(`${BASE_URL}${url}`,Header);
                         return(response)
                    }
                    catch(error){
                      
                    }
                }
