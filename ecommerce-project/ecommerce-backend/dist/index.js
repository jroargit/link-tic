"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const OrderRoutes_1 = __importDefault(require("./routes/OrderRoutes"));
const app = (0, express_1.default)();
exports.app = app;
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(express_1.default.json());
// Rutas
app.use('/api', ProductRoutes_1.default);
app.use('/api', OrderRoutes_1.default);
// Inicializar conexión a la base de datos y luego iniciar el servidor
database_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database connected successfully');
    // Solo iniciar el servidor si no estamos en modo de prueba
    if (process.env.NODE_ENV !== 'test') {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
})
    .catch((error) => console.log('Error initializing database', error));
// Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce API',
            version: '1.0.0',
            description: 'API Documentation for E-commerce Platform',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Rutas donde están los endpoints
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
