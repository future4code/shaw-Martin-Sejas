 export type User = {
    id:string, 
    name:string, 
    email:string, 
    password:string
}


export type Product = {
    name: string, 
    price: number, 
    image_url:string
}

export type Purchase = {
    user_id: string, 
    product_id: number, 
    quantity:number, 
}