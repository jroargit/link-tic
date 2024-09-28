import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';

const router = Router();

router.get('/orders', OrderController.getAllOrders);    
router.get('/orders/:id', OrderController.getOrderById);
router.post('/orders', OrderController.createOrder);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export default router;
