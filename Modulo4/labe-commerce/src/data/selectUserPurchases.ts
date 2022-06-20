import connection from "../connection";

export async function selectUserPurchases(user_id:string) {
    let response = await connection("labecommerce_purchases").select('*').where({user_id}); 
    return response; 
}