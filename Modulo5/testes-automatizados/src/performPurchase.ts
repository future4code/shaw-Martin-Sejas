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