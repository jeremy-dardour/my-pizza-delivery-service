import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Order from '../order/order.entity';

@Entity()
class Pizza {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public type: string;

  @Column()
  public size: number;

  @ManyToOne(() => Order, (order: Order) => order.pizzas)
  public order: Order;
}

export default Pizza;
