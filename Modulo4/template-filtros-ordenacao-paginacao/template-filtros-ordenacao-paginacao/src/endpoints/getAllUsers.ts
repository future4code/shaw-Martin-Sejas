import { Request, Response } from "express";
import selectAllUsersEx1A from "../data/selectAllUsers1A";
import selectAllUsersEx1B from "../data/selectAllUsers1B";
import selectAllUsersEx2 from "../data/selectAllUsers2";
import selectAllUsersEx3 from "../data/selectAllUsers3";
import selectAllUsersEx4 from "../data/selectAllUsers4";




export const getAllUsersEx1A = async(req: Request,res: Response): Promise<void> =>{
    try {
        let nome = req.query.nome?.toString();

        console.log(nome); 
        console.log(req.query)

        if(!nome || typeof nome !== 'string') {
            throw new Error("Nome em formato invalido")
        }
       const users = await selectAllUsersEx1A(nome);
       console.log(users)
 
       if(!(users.length > 0)){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }



 export const getAllUsersEx1B = async(req: Request,res: Response): Promise<void> =>{
    try {
        let tipo = req.query.tipo?.toString();

       

        if(!tipo || typeof tipo !== 'string') {
            throw new Error("Tipo em formato invalido")
        }
       const users = await selectAllUsersEx1B(tipo);
       
 
       if(!(users.length > 0)){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 
 export const getAllUsersEx2 = async(req: Request,res: Response): Promise<void> =>{
    try {
        let tipo = req.query.tipo?.toString();
        let nome = req.query.nome?.toString(); 
        let order = req.query.order?.toString(); 
        let orderBy:string = 'email'; 

        if(!order)
        {
            order = 'asc';
        }

        if(order.toLowerCase() !== 'asc' && order.toLowerCase() !== 'desc')
        {
            order = 'asc';
        }
        else{
            order = order.toLowerCase(); 
        }

        if(tipo)
        {
            orderBy = 'type'
        }

        if(nome)
        {
            orderBy = 'name'
        }

       const users = await selectAllUsersEx2(orderBy, order,nome,tipo);
       
 
       if(!(users.length > 0)){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


 export const getAllUsersEx3= async(req: Request,res: Response): Promise<void> =>{
    try {
        let page = Number(req.query.page as string);

        let offset = 0;  

       
        if(!page || page <= 0 || isNaN(page)) {
            page = 0; 
            offset =0; 
        }
        else {
            offset = ((page-1)*5); 
        }


       const users = await selectAllUsersEx3(offset);
       
 
       if(!(users.length > 0)){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


 export const getAllUsersEx4 = async(req: Request,res: Response): Promise<void> =>{
    try {
        let tipo = req.query.tipo as string;
        let nome = req.query.nome as string;
        let order = req.query.order as string; 
        let page = Number(req.query.page as string);
        let offset = 0;  
        let orderBy:string = 'email'; 
        let limit = 5; 

        if(!order)
        {
            order = 'desc';
        }

        if(order.toLowerCase() !== 'asc' && order.toLowerCase() !== 'desc')
        {
            order = 'desc';
        }
        else{
            order = order.toLowerCase(); 
        }

        if(tipo)
        {
            orderBy = 'type'
        }

        if(nome)
        {
            orderBy = 'name'
        }

        if(!page || page <= 0 || isNaN(page)) {
            page = 0; 
            offset =0; 
            limit = 1000;
        }
        else {
            offset = ((page-1)*5); 
        }

       const users = await selectAllUsersEx4(orderBy, order,nome,tipo,limit,offset);
       
 
       if(!(users.length > 0)){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }