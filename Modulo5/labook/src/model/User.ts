export type LabookUser = {
    id:string, 
    name:string, 
    email:string, 
    password:string
}

export interface LabookUserRegistrationDTO{
    name:string, 
    email:string, 
    password:string
}

export interface LabookUserLoginDTO{
    email:string, 
    password:string
}