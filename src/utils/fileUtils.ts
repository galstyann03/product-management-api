import * as fs from 'fs';
import * as path from 'node:path';
import { Product } from '../interfaces/product';

const productsPath = path.join(__dirname, '../../data/products.json');

export async function readProducts(): Promise<Product[]> {
    const data = await fs.promises.readFile(productsPath, 'utf-8');
    return JSON.parse(data).products || [];
}

export async function writeProducts(products: Product[]): Promise<void> {
    await fs.promises.writeFile(productsPath, JSON.stringify({ products }, null, 2));
}
