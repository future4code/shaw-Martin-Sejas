### Exercicio 1

```ts
export interface User {
    name: string
    balance: number
}


import { User } from "./User";

export function performPurchase(user:User, value:number): User | undefined {

    if (user.balance >= value)
    {
        user.balance = user.balance - value; 
        return user;
    }

    else {
        return undefined; 
    }
}

```

### Exercicio 2
```ts
import { performPurchase } from "../src/performPurchase"
import { User } from "../src/User"

describe("Testing function perform purchase with user balance", ()=> {

    test("Testing user with balance greater than purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance:100
        }

        const result = performPurchase(user, 40); 

        expect(result).toEqual({
            name: "Martin", 
            balance: 60
        })

    })


    test("Testing user with balance equal to purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance: 50     
        }

        const result = performPurchase(user, 50); 

        expect(result).toEqual({
            name: "Martin", 
            balance: 0
        })
    })

    test("Testing user with balance inferior to purchase value", ()=> {
        const user:User = {
            name: "Martin", 
            balance: 20
        }

        const result = performPurchase(user, 100); 

        expect(result).not.toBeDefined()
    })
})


```

### Exercicio 3

```ts
import { Casino, CasinoUser, LOCATION, NATIONALITY, Result, ResultItem } from "./CasinoUser";


export function verifyAge(casino: Casino, users:CasinoUser[]): Result 
{
    let brazilianCasinoGuests:ResultItem = {
        allowed: [],
        unallowed: []
    } 
    let americanCasinoGuests:ResultItem = {
        allowed: [],
        unallowed: []
    }; 

    for (const user of users) {
        if (casino.location === LOCATION.EUA){
            if (user.age >= 21 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.allowed.push(user.name); 
            else if(user.age >= 21 && user.nationality === NATIONALITY.BRAZILIAN) brazilianCasinoGuests.allowed.push(user.name); 
            else if(user.age < 21 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.unallowed.push(user.name); 
            else {
                brazilianCasinoGuests.unallowed.push(user.name)
            }
        }
        else {
            if(user.age >= 18 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.allowed.push(user.name); 
            else if(user.age >= 18 && user.nationality === NATIONALITY.BRAZILIAN) brazilianCasinoGuests.allowed.push(user.name); 
            else if( user.age < 18 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.unallowed.push(user.name);
            else {
                brazilianCasinoGuests.unallowed.push(user.name); 
            }
        }
    }

    let sortedGuests:Result = {
       brazilians: brazilianCasinoGuests,
       americans: americanCasinoGuests
    }

    return sortedGuests; 

   
}
```


### Exercicio 4

```ts
import { Casino, CasinoUser, LOCATION, NATIONALITY, Result, ResultItem } from "./CasinoUser";


export function verifyAge(casino: Casino, users:CasinoUser[]): Result 
{
    let brazilianCasinoGuests:ResultItem = {
        allowed: [],
        unallowed: []
    } 
    let americanCasinoGuests:ResultItem = {
        allowed: [],
        unallowed: []
    }; 

    for (const user of users) {
        if (casino.location === LOCATION.EUA){
            if (user.age >= 21 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.allowed.push(user.name); 
            else if(user.age >= 21 && user.nationality === NATIONALITY.BRAZILIAN) brazilianCasinoGuests.allowed.push(user.name); 
            else if(user.age < 21 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.unallowed.push(user.name); 
            else {
                brazilianCasinoGuests.unallowed.push(user.name)
            }
        }
        else {
            if(user.age >= 18 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.allowed.push(user.name); 
            else if(user.age >= 18 && user.nationality === NATIONALITY.BRAZILIAN) brazilianCasinoGuests.allowed.push(user.name); 
            else if( user.age < 18 && user.nationality === NATIONALITY.AMERICAN) americanCasinoGuests.unallowed.push(user.name);
            else {
                brazilianCasinoGuests.unallowed.push(user.name); 
            }
        }
    }

    let sortedGuests:Result = {
       brazilians: brazilianCasinoGuests,
       americans: americanCasinoGuests
    }

    return sortedGuests; 

   
}
```


