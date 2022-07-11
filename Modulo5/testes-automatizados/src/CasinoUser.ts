export enum LOCATION {
    EUA = "EUA", 
    BRAZIL = "BRAZIL"
}

export enum NATIONALITY {
    AMERICAN = "AMERICAN", 
    BRAZILIAN = "BRAZILIAN"
}

export interface CasinoUser {
    name:string, 
    age: number, 
    nationality: NATIONALITY
}

export interface Casino {
    name: string, 
    location:LOCATION
}

export interface ResultItem {
    allowed: string[]; 
    unallowed:string[]; 
}

export interface Result {
    brazilians: ResultItem; 
    americans: ResultItem
}



