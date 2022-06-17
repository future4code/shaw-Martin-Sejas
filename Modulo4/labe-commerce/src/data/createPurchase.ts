import connection from "../connection";
import {Purchase} from "../types";

export async function createPurchase(newPurchase:Purchase) {
  let productPrice = await connection("labecommerce_products").select('price').where({id: newPurchase.product_id})
  
  let totalPrice = productPrice[0].price * newPurchase.quantity;
  
  await connection('labecommerce_purchases').insert({
    user_id: newPurchase.user_id,
    product_id: newPurchase.product_id,
    quantity: newPurchase.quantity,
    total_price: totalPrice
  })
  return {...newPurchase, totalPrice}
}