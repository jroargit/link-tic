import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity({ name: 'order_entity' }) // Cambia el nombre de la tabla
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column({ type: 'decimal' })
  totalPrice!: number;

  @Column({ default: 'PENDING' })
  status!: string;

  @ManyToOne(() => Product, (product) => product.id)
  product!: Product;
}
