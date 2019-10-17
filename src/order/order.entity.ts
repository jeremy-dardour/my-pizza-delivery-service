import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Customer from '../customer/customer.entity';
import Pizza from '../pizza/pizza.entity';
import DeliveryStatus from './delivery-status.enum';

@Entity()
class Order {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column('enum', { name: 'delivery-status', enum: DeliveryStatus })
  public deliveryStatus: DeliveryStatus;

  @ManyToOne(() => Customer, (customer: Customer) => customer.orders)
  public customer: Customer;

  @OneToMany(() => Pizza, (pizza: Pizza) => pizza.order)
  public pizzas: Pizza[];
}

export default Order;
