import {NextFunction, Request, Response} from "express";
import {
    getProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
} from "../services/services.js";
import {Product} from "../interfaces/product";
import {validateProduct} from "../utils/validate";

export async function getProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const {category} = req.query;
        const products: Product[] = await getProductsService(category as string);
        res.json(products);
    } catch (err) {
        next(err);
    }
}

export async function getProductById(req: Request, res: Response, next: NextFunction) {
    try {
        const product = await getProductByIdService(req.params.id);
        if (product) res.json(product);
        else res.status(404).json({error: 'Product not found'});
    } catch (err) {
        next(err);
    }
}

export async function createProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const newProduct: Product = req.body;

        if (!validateProduct(newProduct)) return res.status(400).json({error: 'Invalid product data'});

        const createdProduct: Product = await createProductService(newProduct);
        res.status(201).json(createdProduct);
    } catch (err) {
        next(err);
    }
}

export async function updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params;
        const updates: Partial<Product> = req.body;
        const updatedProduct = await updateProductService(id, updates);

        if (updatedProduct) res.json(updatedProduct);
        else res.status(404).json({error: 'Product not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params;
        const deletedProduct = await deleteProductService(id);

        if (deletedProduct) res.json(deletedProduct);
        else res.status(404).json({error: 'Product not found'});
    } catch (err) {
        next(err);
    }
}