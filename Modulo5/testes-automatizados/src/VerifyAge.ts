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