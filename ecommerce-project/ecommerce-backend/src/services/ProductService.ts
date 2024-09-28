import { AppDataSource } from '../database';
import { Product } from '../entities/Product';

// Repositorio para gestionar las operaciones de productos
const productRepository = AppDataSource.getRepository(Product);

export const ProductService = {
  getAllProducts: async () => {
    return await productRepository.find();
  },

  getProductById: async (id: number) => {
    return await productRepository.findOneBy({ id });
  },

  createProduct: async (productData: Partial<Product>) => {
    const newProduct = productRepository.create(productData);
    return await productRepository.save(newProduct);
  },

  updateProduct: async (id: number, productData: Partial<Product>) => {
    // Primero encuentra el producto existente
    const product = await productRepository.findOneBy({ id });
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    // Actualiza los campos del producto con los datos recibidos
    Object.assign(product, productData);
  
    // Guarda el producto actualizado en la base de datos
    return await productRepository.save(product);
  },
  

  deleteProduct: async (id: number) => {
    await productRepository.delete(id);
    return { message: 'Product deleted successfully' };
  }
};
