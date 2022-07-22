import React, {useState, useEffect} from 'react'; 
import { registerUser } from '../../services/requests';
import { CuboUser } from '../../Types/User';
import { FormHeaderDiv } from './styled';


type FormHeaderProps = {
  children: React.ReactNode; 
}


export const FormHeader = (props:FormHeaderProps) => {

  let [firstName, setFirstName] = useState(""); 
  let [lastName, setLastName] = useState(""); 
  let [participation, setParticipation] = useState("")

  let sendInformation = async (event:any) => {

    event.preventDefault()
    if(isNaN(Number(participation)) ){
      alert(" 'Participation' must be an integer")
    }
    else {
      let newUser:CuboUser = {
        firstName,
        lastName,
        participation: Number(participation)
      }

      //send to backend
      

      setFirstName("");
      setLastName("");
      setParticipation("");

      await registerUser(newUser) 
      
    } 
  }

  useEffect(()=> {
  
  },[firstName, lastName, participation])

  return (
    <FormHeaderDiv>
      <form onSubmit={(event)=> sendInformation(event)}>
      <input required placeholder='First name' value={firstName} onChange={(event) => setFirstName(event.target.value)}/> 
      <input required placeholder='Last name' value={lastName} onChange={(event)=> {setLastName(event.target.value)}}/> 
      <input required placeholder='Participation' value={participation} onChange={(event) => {setParticipation(event.target.value)}}/>
      <button>SEND</button>
      </form>
      
      </FormHeaderDiv>
  )
}

export default FormHeader