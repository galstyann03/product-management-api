import { Router } from 'express';
import {createProduct, deleteProduct, getProductById, getProducts, updateProduct} from "../controllers/controllers.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;