import axios from "axios";


//A) O promise all faz vc esperar por todas as promises em um array serem completas

//B) Eh mais rapido que esperar individualmente por cada promise, ja que as mesmas podem retornar em tempos diferentes

//C) 


type User = {
    id:string, 
    name:string, 
    email:string
}

let myUsers = [
    {
      id: '4188567e-27c6-446c-8b4e-1bb1b92b6292',
      email: 'syrio@labenu.com.br',
      name: 'Syrio Forel, o de Braavos'
    },
    {
      id: '44671e4b-1e41-4247-ad97-b2da9180aac4',
      email: 'joao@labenu.com.br',
      name: 'Johnny, o brabo'
    },
    {
      id: '47bb6354-41fd-4f40-9601-8332e2a96f31',
      email: 'titanic@labenu.com.br',
      name: 'Titanic, o barco'
    },
    {
      id: '555cabfd-2e18-43f6-8855-a2241c7d2e44',
      email: 'baixo.yamaha@labenu.com.br',
      name: 'Yamaha Trbx305 5 cordas, o Baixo'
    },
    {
      id: '5c1b83bb-ce45-455a-ae3e-e5c6acf176db',
      email: 'braille@labenu.com.br',
      name: 'Louis, o Braille'
    },
    {
      id: '95cad7c6-5b0e-43e7-a74e-fb0a280bdaec',
      email: 'barium@labenu.com.br',
      name: 'Ba, o Bário'
    },
    {
      id: 'c5d5c6fb-96a4-478b-8376-b5afe07905de',
      email: 'beedle@labenu.com.br',
      name: 'Beedle, o bardo'
    },
    {
      id: 'd32f3136-2f0b-4956-a739-11092dc703f5',
      email: 'maria@labenu.com.br',
      name: 'Maria, a do Bairro'
    },
    {
      id: 'd4d966af-8750-4b61-85dd-03e7ae23ddfd',
      email: 'reidocarrinho@labenu.com.br',
      name: 'Darvas, o barbado'
    },
    {
      id: 'd5252df5-05bd-4989-9d92-783af5fbcae0',
      email: 'paola@labenu.com.br',
      name: 'Paola, a Bracho'
    },
    {
      id: 'e490871e-557f-40c8-902e-f2244bdc1f79',
      email: 'Rick@Severus.com.br',
      name: 'Principe, o mestiço'
    },
    {
      id: 'eb98add9-6981-41d6-8d9f-d63258486296',
      email: 'pais.basco@labenu.com.br',
      name: 'País, o Basco'
    }
  ]

let notifyUsers = async (users:User[],message:string):Promise<void> => {
   try {
         const promises = users.map( (user) => {
            return axios.post(`https://labenews.herokuapp.com/notifications`, { subscriberId: user.id, message}); 
         })

         console.log(promises)
         await Promise.all(promises)
         console.log(promises)
    
   } catch (error:any) {
        console.log(`Error: ${error.message}`)
   }
}


notifyUsers(myUsers, "Martin testando")
