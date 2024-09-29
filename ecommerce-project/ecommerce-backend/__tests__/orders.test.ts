import request from 'supertest';
import { app } from '../src/index';

describe('Order Endpoints', () => {
  let orderId: number;
  const productId = 1;

  // Crear un nuevo pedido (POST)
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        quantity: 2,
        product: {
          id: productId,
        },
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    orderId = response.body.id;
  });

  // Obtener todos los pedidos (GET)
  it('should get all orders', async () => {
    const response = await request(app).get('/api/orders');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Obtener un pedido por ID (GET)
  it('should get an order by ID', async () => {
    const response = await request(app).get(`/api/orders/${orderId}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', orderId);
  });

  // Actualizar un pedido (PUT)
  it('should update an order', async () => {
    const response = await request(app)
      .put(`/api/orders/${orderId}`)
      .send({
        quantity: 5,
        status: 'COMPLETED',
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'COMPLETED');
  });

  // Eliminar un pedido (DELETE)
  it('should delete an order', async () => {
    const response = await request(app).delete(`/api/orders/${orderId}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Order deleted successfully');
  });
});
