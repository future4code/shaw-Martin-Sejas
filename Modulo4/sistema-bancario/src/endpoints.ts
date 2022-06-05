import  {Request, Response} from "express"
import { getClientData, validateDateOfBirth, validateCpf, updateClientData, getCurrentDate } from "./helperFunctions";
import { Transaction, User } from "./sistema-bancario";


//exercicio 6
//gets all users
export const getUsers = (req:Request, res:Response) => {
  try {
    //try to read from file
    let data = getClientData(); 
   
    //if no data, file error
    if(!(data.users.length > 0)) throw new Error("Unable to read file")

  

    if (data.users!== undefined) res.status(200).send(data)
    else throw new Error("unable to read data")


  } catch (error:any) {
      res.status(500).send({message: error.message})
  }
}




//exercicio 5 e 7 e Desafio 1
//validates and adds new user
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
        if (!validateDateOfBirth(dateOfBirth))
        {
            throw new Error("Error: User must be over 18")
        }

        let data = getClientData();
        
        if(!data.users)
        {
            throw new Error("Couldn't access client data")
        }

         //if not valid, cpf already in use
         if(!validateCpf(cpf,data.users)) 
         {
             statusCode = 409; 
             throw new Error("Cpf already registered")
         }

        let newUser:User = {
            name,
            cpf, 
            dateOfBirth,
            accountBalance: 0,
            transactions: []
        }

        //add user to array
        data.users.push(newUser); 

        //write new user to array
        if(updateClientData(data)) res.status(201).send("User Registered Successfully")
  
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




//desafio 2
//get a user's balance by cpf 
export const getUserBalance = ((req:Request, res:Response) => {
    let cpf = req.params.cpf; 
    let statusCode = 400; 
    try {
        //check if cpf is on valid format
        if (!cpf.match(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/))
        {
            throw new Error("Cpf must have format 000.000.000-00")
        }
        
        let data = getClientData(); 

        //check if data was read
        if(!(data.users.length > 0))
        {
            throw new Error("Couldn't read data from database")
        }

        //check if cpf exists on database
        if(validateCpf(cpf, data.users))
        {
            throw new Error("Cpf doesn't exist on database")
        }

        let clientBalance:number|undefined; 

        for (let i =0; i<data.users.length; i++)
        {
            if (data.users[i].cpf === cpf)
            {
                clientBalance = data.users[i].accountBalance;              
            }
        }
        if(clientBalance === undefined)
        {
            throw new Error("Error reading client balance")
        }
        res.status(200).send({balance: clientBalance})
        
    } catch (error:any) {
        if (error.message === undefined)
        {
            res.status(500).send({message: "Unexpected server error"})
        }
        else {
            res.status(statusCode).send({message: error.message})
        }
    }

})


//desafio 3 e desafio 4
//updates balance of a user
export const putValueToUserBalance = (req:Request, res:Response) => {
    let cpf = req.params.cpf; 
    let statusCode = 400; 
    try {
        let {name, value} = req.body

        //check to see if cpf is on correct format
        if (!cpf.match(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/))
        {
            throw new Error("Cpf must have format 000.000.000-00")
        }

        //check if body values are missing
        if (!name || !value)
        {
            throw new Error("Please check request body, must contain fields: name(string) and value(number)")
        }

        //check if body value types are correct
        if(typeof name !== 'string' || typeof value !== 'number')
        {
            throw new Error("Please data types, fields must have following data types: name(string) and value(number)")
        }

        //check deposit is bigger than 0
        if(value <= 0)
        {
            throw new Error("Deposits have to be bigger than 0")
        }
        
        let data = getClientData(); 

        //check data was read
        if(!(data.users.length > 0))
        {
            throw new Error("Couldn't read data from database")
        }

        //check cpf exists
        if(validateCpf(cpf, data.users))
        {
            throw new Error("Cpf doesn't exist on database")
        }

        for(let i = 0; i<data.users.length; i++)
        {
            if(data.users[i].cpf === cpf)
            {
                if(data.users[i].name !== name)
                {
                    throw new Error("Wrong client name, please verify request")
                }
                else {
                    let deposit:Transaction = {
                        value,
                        date: getCurrentDate(),
                        description: "Depósito de dinheiro"
                    }
                    data.users[i].transactions.push(deposit); 
                }
            }
        }

        updateClientData(data); 

        res.status(200).send("Deposito efetuado com sucesso!")
        
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

//desafio 5 e desafio 7 e desafio 8
//registers a bill of a client given the cpf
export const registerClientBill = (req:Request, res:Response) => {
    let cpf = req.params.cpf; 
    let statusCode = 400; 
    let validDate = false; 
    let userIndex = 0; 
    try {
        let {date, value, description} = req.body; 

        if(!value || !description)
        {
            throw new Error("Please check request, value:number and description:string of transaction needed")
        }
        if (value < 1)
        {
            throw new Error("Value can't be less than zero")
        }

        if(typeof value !== 'number' || typeof description !== 'string' )
        {
            throw new Error("Please check request, value:number and description:string of transaction needed")
        }

        if(date === undefined)
        {
            date = getCurrentDate(); 
            validDate = true; 
        }

        else if(typeof date === 'string')
        {
            //check to see if date is on a valid format
            if (!date.match(/^(((0[1-9]|[12][0-9]|30)\/(0[13-9]|1[012])|31\/(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])\/02)\/[0-9]{4}|29\/02\/([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/)) {
                throw new Error("Please enter a valid date. Format: DD/MM/YYYY")
            }
            //check if due date is on the past
            else{
                let tempDate = date.split("/").map(Number); 
                let paymentDate = new Date(tempDate[2], tempDate[1], tempDate[0]);
                let todayDate = new Date(Date.now());
                if (paymentDate.getTime() < todayDate.getTime()) 
                {
                    validDate = false; 
                    throw new Error("Can't pay bill with due date on the past")
                }
                else {
                    validDate = true
                }
            }
        }
        else {
            throw new Error("Please make sure date is on format string")
        }

        let data = getClientData(); 
        
        //check if data is there
        if(!data.users)
        {
            throw new Error("Couldn't access client data")
        }

        //if not valid, cpf already in use
        if(validateCpf(cpf,data.users)) 
        {
            statusCode = 409; 
            throw new Error("Cpf not found")
        }

        if(validDate)
        {
            
            for(let i =0; i < data.users.length; i++)
            {
                if(data.users[i].cpf === cpf)
                {
                    if (data.users[i].accountBalance >= value)
                    {
                        let newTransaction:Transaction = {
                            value: value*-1, 
                            date, 
                            description,
                        }

                        data.users[i].transactions.push(newTransaction);
                        userIndex = i; 
                        break;
                        
                    }
                    else {
                        throw new Error("Not enough funds to pay bill")
                    }
                }
            } 

            let userData = data.users[userIndex]; 
            updateClientData(data); 
            res.status(201).send({message: "Bill uploaded sucessfully!",
        user: userData})
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

//desafio 6
//pays due bills of a client, given a cpf
export const updateAccountBalance = (req:Request, res:Response) => {
    let cpf = req.params.cpf; 
    let statusCode = 400; 
    try {
        if (!cpf.match(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/))
        {
            throw new Error("Cpf must have format 000.000.000-00")
        }

        let data = getClientData(); 

        //check if data was read
        if(!(data.users.length > 0))
        {
            throw new Error("Couldn't read data from database")
        }

         //check if cpf exists on database
         if(validateCpf(cpf, data.users))
         {
             throw new Error("Cpf doesn't exist on database")
         }

         let cpfIndex = data.users.findIndex((user) => {
            if (user.cpf === cpf) {
                return true;
            }
        })

        let currentDate = new Date(Date.now()); 
        let totalBalance:number = 0; 
        if (data.users[cpfIndex].transactions.length > 0)
      {   
          
          data.users[cpfIndex].transactions.map( (transaction, index, array) => {

            let date = (transaction as Transaction).date.split("/").map(Number); 
            let paymentDate= new Date(date[2],date[1],date[0]); 

            if (paymentDate.getTime() > currentDate.getTime())
            {
                totalBalance+= (transaction as Transaction).value;         
            }
           
         })}
         else {
             throw new Error("No transactions to update")
         }
         data.users[cpfIndex].accountBalance = totalBalance; 
         updateClientData(data);

         res.status(200).send({message: "Account Balance Updated!", user: data.users[cpfIndex]})

        
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

//desafio 9,10,11
//validates transfer between two accounts
export const createTransfer = (req:Request, res:Response) => {

}
