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
    await productRepository.update(id, productData);
    return await productRepository.findOneBy({ id });
  },

  deleteProduct: async (id: number) => {
    await productRepository.delete(id);
    return { message: 'Product deleted successfully' };
  }
};
