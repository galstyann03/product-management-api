import * as path from "node:path";
import {Product} from "../interfaces/product";
import {readProducts, writeProducts} from "../utils/fileUtils";

const productsPath = path.join(__dirname, '../../data/products.json');

export async function getProductsService(category?: string): Promise<Product[]> {
    const products: Product[] = await readProducts();
    return category ? products.filter((product: Product) => product.category === category && !product.deleted) : products.filter((product: Product) => !product.deleted);
}

export async function getProductByIdService(id: string): Promise<Product | null> {
    const products: Product[] = await readProducts();
    return products.find((product: Product) => product.id === id && !product.deleted) || null;
}

export async function createProductService(newProduct: Product): Promise<Product> {
    const products: Product[] = await readProducts();
    newProduct.id = (products.length + 1).toString();
    products.push(newProduct);
    await writeProducts(products);
    return newProduct;
}

export async function updateProductService(id: string, partialUpdates: Partial<Product>): Promise<Product | null> {
    const products: Product[] = await readProducts();
    const product = products.find((product: Product) => product.id === id && !product.deleted);

    if (product) {
        Object.assign(product, partialUpdates);
        await writeProducts(products);
        return product;
    }
    return null;
}

export async function deleteProductService(id: string): Promise<Product | null> {
    const products: Product[] = await readProducts();
    const product = products.find((product: Product) => product.id === id && !product.deleted);

    if (product) {
        Object.assign(product, {deleted: true});
        await writeProducts(products);
        return product;
    }
    return null;
}