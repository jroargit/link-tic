// src/index.ts
import express from 'express';
import { AppDataSource } from './data-source';

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Conectar a la base de datos
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log('Error connecting to database:', error));
