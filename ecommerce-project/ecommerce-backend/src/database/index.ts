import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { Product } from '../entities/Product';
import { Order } from '../entities/Order';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Product, Order],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => console.log('Error connecting to database', error));
