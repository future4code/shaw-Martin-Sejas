import connection from "../connection";
import {Product} from "../types";

export async function createProduct(newProduct:Product) {
  await connection('labecommerce_products').insert(newProduct);
    
}