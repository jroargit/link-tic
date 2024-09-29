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
exports.ProductService = void 0;
const database_1 = require("../database");
const Product_1 = require("../entities/Product");
// Repositorio para gestionar las operaciones de productos
const productRepository = database_1.AppDataSource.getRepository(Product_1.Product);
exports.ProductService = {
    getAllProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield productRepository.find();
    }),
    getProductById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield productRepository.findOneBy({ id });
    }),
    createProduct: (productData) => __awaiter(void 0, void 0, void 0, function* () {
        const newProduct = productRepository.create(productData);
        return yield productRepository.save(newProduct);
    }),
    updateProduct: (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
        // Primero encuentra el producto existente
        const product = yield productRepository.findOneBy({ id });
        if (!product) {
            throw new Error('Product not found');
        }
        // Actualiza los campos del producto con los datos recibidos
        Object.assign(product, productData);
        // Guarda el producto actualizado en la base de datos
        return yield productRepository.save(product);
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield productRepository.delete(id);
        return { message: 'Product deleted successfully' };
    })
};
