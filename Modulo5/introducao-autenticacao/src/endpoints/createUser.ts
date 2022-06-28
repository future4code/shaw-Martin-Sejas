import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { AuthenticationData, generateId, generateToken } from "../services/generateId";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body
      const userDB = new UserDatabase()

      if ( !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      if(typeof email !== 'string' || typeof password != 'string')
      {
         throw new Error("Por favor preencha os campos em formato de string")
      }

      //b
      if(!email.includes('@'))
      {
         throw new Error("Email invalido!")
      }

      if(password.length <6)
      {
         throw new Error("Senha tem que ter mais de 6 caracteres")
      }

      const user = await userDB.getByEmail(email)
      console.log(user)
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string= generateId(); 

      const newUser: user = { id, email, password }

     await userDB.create(newUser); 
      let token = generateToken({id});
      res.status(201).send({ token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}