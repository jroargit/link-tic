"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const database_1 = require("../database");
const Order_1 = require("../entities/Order");
const Product_1 = require("../entities/Product");
const orderRepository = database_1.AppDataSource.getRepository(Order_1.Order);
const productRepository = database_1.AppDataSource.getRepository(Product_1.Product);
exports.OrderService = {
    getAllOrders: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield orderRepository.find({ relations: ['product'] });
    }),
    getOrderById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield orderRepository.findOne({ where: { id }, relations: ['product'] });
    }),
    createOrder: (orderData) => __awaiter(void 0, void 0, void 0, function* () {
        // Verificar si el campo 'product' y 'quantity' están definidos
        if (!orderData.product || !orderData.product.id) {
            throw new Error('Product information is missing in the order data');
        }
        if (!orderData.quantity || orderData.quantity <= 0) {
            throw new Error('Quantity is missing or invalid in the order data');
        }
        // Buscar el producto en la base de datos
        const product = yield productRepository.findOneBy({ id: orderData.product.id });
        if (!product) {
            throw new Error('Product not found');
        }
        // Calcular el precio total del pedido
        const totalPrice = product.price * orderData.quantity;
        const newOrder = orderRepository.create(Object.assign(Object.assign({}, orderData), { totalPrice }));
        return yield orderRepository.save(newOrder);
    }),
    updateOrder: (id, orderData) => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield orderRepository.findOneBy({ id });
        if (!order) {
            throw new Error('Order not found');
        }
        // Actualizar datos del pedido
        orderRepository.merge(order, orderData);
        return yield orderRepository.save(order);
    }),
    deleteOrder: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield orderRepository.delete(id);
        return { message: 'Order deleted successfully' };
    })
};
