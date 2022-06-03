import express, {Request, Response} from "express"
import { users } from "./sistema-bancario"

//check valid date of birth

//function that received a data of birth returns true or false if the user is over 18
function ValidDateOfBirth(dob:string):boolean {
let dateInString = dob.split('/'); 

let birthDate = new Date(Number(dateInString[0]), Number(dateInString[1]), Number(dateInString[2])); 
let today = new Date(Date.now())

//if year difference greater than 18, dob is valid
if (today.getFullYear() -birthDate.getFullYear() > 18)
{ 
    return true; 
}
//if 18, must check if user already had their birthday or not
else if (today.getFullYear() -birthDate.getFullYear() === 18)
{
    //if today's month is greater than birthday month user is 18, return true
    if(today.getMonth() > birthDate.getMonth())
    {
        return true;
    }
    //if the month is the same, we check the day
    else if (today.getMonth() === birthDate.getMonth())
    {
        //if today is their birthday, or it has already passed return true
        if(today.getDay() <= birthDate.getDay())
        {
            return true;
        }
        //else return false
        else {
            return false; 
        }
    }
    else {
        return false;
    }
}
else {
    return false;
}
}


//gets all users
export const getUsers = (req:Request, res:Response) => {
  try {
      res.status(200).send(users)
  } catch (error:any) {
      res.status(500).send({message: error.message})
  }
}

//validates and creates new user
export const registerUser = (req:Request, res:Response) => {
    let statusCode = 400; 
    let {name, cpf, dateOfBirth} = req.body
    try {
        //check if any of the required fields are empty
        if(!name || !cpf || !dateOfBirth)
        {
            throw new Error("Wrong or missing information on body, please input a name, cpf and date of birth(DD/MM/YYYY)")
        }
        //check if any of the fields are the wrong data type
        if(typeof name !== 'string' || typeof cpf !== 'string' || typeof dateOfBirth !== 'string')
        {
            throw new Error("Wrong data types on body, must be name:string, cpf:string (format: 000.000.000-00), dateOfBirth:string (format DD/MM/YYYY)")
        }
        //check to see if we have numbers on user name
        if(!name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/))
        {
            throw new Error("Can't have numbers on name field")
        }
        //check to see if cpf is on a valid format
        if (!cpf.match(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/))
        {
            throw new Error("Cpf must have format 000.000.000-00")
        }
        //check to see if date is on a valid format
        if (!dateOfBirth.match(/^(((0[1-9]|[12][0-9]|30)\/(0[13-9]|1[012])|31\/(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])\/02)\/[0-9]{4}|29\/02\/([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/))
        {
            throw new Error("Please enter a valid date. Format: DD/MM/YYYY")
        }
        //check to see if user is over 18
        if (!ValidDateOfBirth(dateOfBirth))
        {
            throw new Error("Error: User must be over 18")
        }




        
    } catch (error:any) {
        if (error.message === undefined)
        {
            res.status(500).send({message: "Unexpected server error"})
        }
        else {
            res.status(statusCode).send({message: error.message})
        }
        
    }
}