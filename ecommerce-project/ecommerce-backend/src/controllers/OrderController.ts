import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

export const OrderController = {
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  },

  getOrderById: async (req: Request, res: Response) => {
    try {
      const order = await OrderService.getOrderById(Number(req.params.id));
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  },

  createOrder: async (req: Request, res: Response) => {
    try {
      const newOrder = await OrderService.createOrder(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  },

  updateOrder: async (req: Request, res: Response) => {
    try {
      const updatedOrder = await OrderService.updateOrder(Number(req.params.id), req.body);
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  },

  deleteOrder: async (req: Request, res: Response) => {
    try {
      const message = await OrderService.deleteOrder(Number(req.params.id));
      res.json(message);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
};
