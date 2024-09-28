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

// Iniciar Servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Inicializar conexión a la base de datos
AppDataSource.initialize();
