import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToListTripsPage } from '../../services/Routes/coordinator';
import { LogInPageCoreDiv, LogInPageDiv } from './styled';
import Header from '../../components/Header/Header';
import { Button, Input, InputGroup } from '@chakra-ui/react';
import { Login } from '../../services/requests';

function LoginPage() {
  let [email, setEmail] = useState(""); 
  let [password, setPassword] = useState(""); 
  let [failedLogin, setFailedLogin] = useState(false);
  let [response, setResponse] = useState({})
  const navigate = useNavigate(); 

 const handleKeyDown = (event) => {
   if (event.key === 'Enter')
   {
     attemptLogin();
   }
 }

  let attemptLogin = () => {

      let body = {
        "email": email, 
        "password": password
      }

      Login(body, setResponse); 
      
      if(response.success) 
      {
        setEmail(""); 
        setPassword(""); 
        console.log(response.token); 
        setFailedLogin(false)
        //push to local storage
        window.localStorage.setItem("token", response.token)
        navigate("/", {replace: true}); 
      }

      else 
      {
        setFailedLogin(true); 
      }
  }



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



  return (
    <LogInPageDiv onKeyDown={handleKeyDown}>
    <Header left = "Missões" leftButton={() => goToListTripsPage(navigate)}
            right = "Home" rightButton={() =>goToHomePage(navigate)}/>

           <LogInPageCoreDiv >
             <h1>Login</h1>

             {failedLogin ? <p> Erro: Verifique login e senha</p> : <span></span>}
             <Input  
             variant='filled' 
             placeholder='Email' 
             _placeholder={{opacity: 0.8, color: 'white'}}
             type="email"
             value={email}
             onChange={ (event) => setEmail(event.target.value)}
             isInvalid = {failedLogin}
             
             />
             <Input  
             variant="filled"
             placeholder='Senha' 
              _placeholder={{opacity: 0.8, color: 'white'}}
              type= "password"
              value={password}
              onChange={ (event) => setPassword(event.target.value)}
              isInvalid = {failedLogin}
              />
             <Button  colorScheme="secondary" onClick={() => attemptLogin()} >Entrar</Button>
             
            
           </LogInPageCoreDiv>
    </LogInPageDiv>
  )
}

export default LoginPage