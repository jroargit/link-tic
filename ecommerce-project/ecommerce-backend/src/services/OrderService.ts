import { AppDataSource } from '../database';
import { Order } from '../entities/Order';
import { Product } from '../entities/Product';

const orderRepository = AppDataSource.getRepository(Order);
const productRepository = AppDataSource.getRepository(Product);

export const OrderService = {
  getAllOrders: async () => {
    return await orderRepository.find({ relations: ['product'] });
  },

  getOrderById: async (id: number) => {
    return await orderRepository.findOne({ where: { id }, relations: ['product'] });
  },

  createOrder: async (orderData: Partial<Order>) => {
    // Verificar si el campo 'product' y 'quantity' están definidos
    if (!orderData.product || !orderData.product.id) {
      throw new Error('Product information is missing in the order data');
    }
  
    if (!orderData.quantity || orderData.quantity <= 0) {
      throw new Error('Quantity is missing or invalid in the order data');
    }
  
    // Buscar el producto en la base de datos
    const product = await productRepository.findOneBy({ id: orderData.product.id });
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    // Calcular el precio total del pedido
    const totalPrice = product.price * orderData.quantity;
  
    const newOrder = orderRepository.create({ ...orderData, totalPrice });
    return await orderRepository.save(newOrder);
  },
  

  updateOrder: async (id: number, orderData: Partial<Order>) => {
    const order = await orderRepository.findOneBy({ id });

    if (!order) {
      throw new Error('Order not found');
    }

    // Actualizar datos del pedido
    orderRepository.merge(order, orderData);
    return await orderRepository.save(order);
  },

  deleteOrder: async (id: number) => {
    await orderRepository.delete(id);
    return { message: 'Order deleted successfully' };
  }
};
