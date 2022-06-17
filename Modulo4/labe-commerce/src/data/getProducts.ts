import connection from "../connection";


export async function getProducts() {
    let response = await connection("labecommerce_products").select('*');
    return response; 
    
}