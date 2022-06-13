import axios from "axios";

type User = {
    id:string, 
    name:string, 
    email:string
}

let notifyUsers = async (users:User[],message:string):Promise<void> => {
   try {
         for(let user of users)
         {
               await axios.post(`https://labenews.herokuapp.com/notifications`, { subscriberId: user.id, message})
         }
         console.log("Notifications sent successfully!")
    
   } catch (error:any) {
        console.log(`Error: ${error.message}`)
   }
}