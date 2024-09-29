import request from 'supertest';
import { app } from '../src/index'; 

describe('Product Endpoints', () => {
  let productId: number;

  // Crear un nuevo producto (POST)
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 9.99,
        quantity: 100,
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    productId = response.body.id;
  });

  // Obtener todos los productos (GET)
  it('should get all products', async () => {
    const response = await request(app).get('/api/products');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Obtener un producto por ID (GET)
  it('should get a product by ID', async () => {
    const response = await request(app).get(`/api/products/${productId}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', productId);
  });

  // Actualizar un producto (PUT)
  it('should update a product', async () => {
    const response = await request(app)
      .put(`/api/products/${productId}`)
      .send({
        name: 'Updated Test Product',
        price: 19.99,
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'Updated Test Product');
  });

  // Eliminar un producto (DELETE)
  it('should delete a product', async () => {
    const response = await request(app).delete(`/api/products/${productId}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Product deleted successfully');
  });
});
