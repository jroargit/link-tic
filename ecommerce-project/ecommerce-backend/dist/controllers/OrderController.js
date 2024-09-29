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
exports.OrderController = void 0;
const OrderService_1 = require("../services/OrderService");
exports.OrderController = {
    getAllOrders: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const orders = yield OrderService_1.OrderService.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    }),
    getOrderById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield OrderService_1.OrderService.getOrderById(Number(req.params.id));
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    }),
    createOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newOrder = yield OrderService_1.OrderService.createOrder(req.body);
            res.status(201).json(newOrder);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    }),
    updateOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedOrder = yield OrderService_1.OrderService.updateOrder(Number(req.params.id), req.body);
            res.json(updatedOrder);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    }),
    deleteOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const message = yield OrderService_1.OrderService.deleteOrder(Number(req.params.id));
            res.json(message);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    })
};
