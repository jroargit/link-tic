import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column({ type: 'decimal' })
  totalPrice!: number;

  @Column({ default: 'PENDING' })
  status!: string; // Puedes definir diferentes estados como 'PENDING', 'COMPLETED', etc.

  // Relación con el producto
  @ManyToOne(() => Product, (product) => product.id)
  product!: Product;
}
