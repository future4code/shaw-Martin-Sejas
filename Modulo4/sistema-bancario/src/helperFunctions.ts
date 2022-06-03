//function that received a data of birth returns true or false if the user is over 18
import fs from 'fs'; 
import { User } from "./sistema-bancario";


export function validateDateOfBirth(dob:string):boolean {
    let dateInString = dob.split('/'); 
    let birthDate = new Date(Number(dateInString[2]), Number(dateInString[1]), Number(dateInString[0])); 
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




    
//check if there is already an existing cpf on list
export function validateCpf(cpf: string, users: User[]): boolean {
    let cpfIndex = users.findIndex((user) => {
        if (user.cpf === cpf) {
            return true;
        }
    })

    return cpfIndex === -1;
}




//export function to get parsed client data
export function getClientData(): { users: [User] } {
    let userData = fs.readFileSync("./data/users.json", { encoding: 'utf8', flag: 'r' })
    let data = JSON.parse(userData);
    return data;
}




//export function to write data into jsonfile
export function updateClientData(newData: { users: [User] }): boolean {
    let dataToWrite = JSON.stringify(newData);
    try {
        fs.writeFileSync("./data/users.json", dataToWrite)
        return true;
    } catch (error: any) {
        return false;
    }

}