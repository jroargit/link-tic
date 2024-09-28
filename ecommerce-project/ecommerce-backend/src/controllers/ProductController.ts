import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export const ProductController = {
    getAllProducts: async (req: Request, res: Response) => {
      try {
        const products = await ProductService.getAllProducts();
        res.json(products);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
      }
    },
  
    getProductById: async (req: Request, res: Response) => {
      try {
        const product = await ProductService.getProductById(Number(req.params.id));
        res.json(product);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
      }
    },
  
    createProduct: async (req: Request, res: Response) => {
      try {
        const newProduct = await ProductService.createProduct(req.body);
        res.status(201).json(newProduct);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
      }
    },
  
    updateProduct: async (req: Request, res: Response) => {
      try {
        const updatedProduct = await ProductService.updateProduct(Number(req.params.id), req.body);
        res.json(updatedProduct);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
      }
    },
  
    deleteProduct: async (req: Request, res: Response) => {
      try {
        const message = await ProductService.deleteProduct(Number(req.params.id));
        res.json(message);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
      }
    }
  };
  
