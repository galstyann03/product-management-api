import {Product} from "../interfaces/product";

export function validateProduct(product: Product): boolean {
    if (product.price !== undefined && (product.price <= 0)) return false;
    if (product.stock?.available !== undefined && (product.stock.available < 0)) return false;
    return true;
}