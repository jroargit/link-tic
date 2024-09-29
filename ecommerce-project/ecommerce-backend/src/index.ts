import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import express from 'express';
import { AppDataSource } from './database';
import ProductRoutes from './routes/ProductRoutes';
import OrderRoutes from './routes/OrderRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', ProductRoutes);
app.use('/api', OrderRoutes);

// Inicializar conexión a la base de datos y luego iniciar el servidor
AppDataSource.initialize()
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
