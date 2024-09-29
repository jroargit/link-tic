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
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
exports.ProductController = {
    getAllProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield ProductService_1.ProductService.getAllProducts();
            res.json(products);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }),
    getProductById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield ProductService_1.ProductService.getProductById(Number(req.params.id));
            res.json(product);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }),
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newProduct = yield ProductService_1.ProductService.createProduct(req.body);
            res.status(201).json(newProduct);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = Number(req.params.id);
            const productData = req.body;
            const updatedProduct = yield ProductService_1.ProductService.updateProduct(id, productData);
            res.json(updatedProduct);
        }
        catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error' });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const message = yield ProductService_1.ProductService.deleteProduct(Number(req.params.id));
            res.json(message);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    })
};
