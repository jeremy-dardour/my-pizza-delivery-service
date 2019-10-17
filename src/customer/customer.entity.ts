import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Order from '../order/order.entity';

@Entity()
class Customer {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public address: string;

  @OneToMany(() => Order, (order: Order) => order.customer)
  public orders: Order[];
}

export default Customer;
