### Exercicio 1

A) Sim acho que strings dãp mais opções de variabilidade, e é mais seguro por isso, especialmente em guardar campos criptografados. 

B) Feito em .src/services/

### Exercicio 2 
a) Tem uma varaivel para o nome da tabela usada, uma variavel de base de dados, e uma funcao de registrar um usuario na base de dados

b) 
```sql
CREATE TABLE USER (
id VARCHAR (255) PRIMARY KEY, 
email VARCHAR(255) UNIQUE NOT NULL, 
password VARCHAR(255) NOT NULL
)
```
### Exercicio 3
a) A linha as string tipa a variavel para o formato que queremos

b) 
```ts
export const generateToken = (id:AuthenticationData): string => {
    const expiresIn = "1min"
    const token = jwt.sign({
        id
    },
    process.env.JWT_KEY as string,{
        expiresIn
    }
    );
    return token; 
}

export type AuthenticationData= {
    id:string
}
```

### Exercicio 4 

a) 
```ts
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
```


b) 

``` ts
 if(!email.includes('@'))
      {
         throw new Error("Email invalido!")
      }


if ( !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

```
c) 

``` ts 
 if(password.length <6)
      {
         throw new Error("Senha tem que ter mais de 6 caracteres")
      }
```

### Exercicio 5
```ts
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }

```

### Exercicio 6

```ts
import {Request, Response} from "express"

export const loginUser = async(req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {email, password} = req.body; 

        if(!email || !password) {
            throw new Error("Por favor preencha os campos de email e senha!");             
        }

        if(typeof email !== 'string' && typeof password !== 'string') {
            throw new Error("Email e Senha devem ser do formato string")
        }

         (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send(token)
    
    } catch (error:any) {
        if(!error.message){
            res.status(500).send("Internal server error"); 
        }

        else if(error.message){
            res.status(statusCode).send({message: error.message}); 
        }
    }
}
```


### Exercicio 7 

a) Ela permite pegar qualquer tipo que o payload seja 

b) 

```ts

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```
### Exercicio 8

A) 
```ts
 public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }

```
B) 

```ts
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

   
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

