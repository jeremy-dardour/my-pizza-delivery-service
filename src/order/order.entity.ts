import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Customer from '../customer/customer.entity';
import Pizza from '../pizza/pizza.entity';
import DeliveryStatus from './deliveryStatus.enum';

@Entity()
class Order {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column('enum', { name: 'delivery-status', enum: DeliveryStatus })
  public deliveryStatus: DeliveryStatus;

  @ManyToOne(() => Customer, (customer: Customer) => customer.orders)
  @JoinTable()
  public customer: Customer;

  @OneToMany(() => Pizza, (pizza: Pizza) => pizza.order)
  @JoinTable()
  public pizzas: Pizza[];
}

export default Order;
