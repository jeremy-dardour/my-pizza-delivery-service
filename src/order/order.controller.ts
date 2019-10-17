import * as express from 'express';
import { getRepository } from 'typeorm';
import Customer from '../customer/customer.entity';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import DeliveryStatus from './deliveryStatus.enum';
import CreateOrderDto from './order.dto';
import Order from './order.entity';

class OrderController implements Controller {
  public path = '/orders';
  public router = express.Router();
  private orderRepository = getRepository(Order);
  private customerRepository = getRepository(Customer);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(this.path, this.getAllOrders)
      .post(this.path, validationMiddleware(CreateOrderDto), this.createOrder);
  }

  private createOrder = async (request: express.Request, response: express.Response) => {
    const postData: CreateOrderDto = request.body;

    const postDataToCreate = {
      deliveryStatus: DeliveryStatus.InPreparation,
      ...postData,
    };

    const existingCustomer = await this.customerRepository.findOne(postData.customer);

    if (existingCustomer) {
      postDataToCreate.customer = existingCustomer;
    }

    const newPost = this.orderRepository.create(postDataToCreate);
    await this.orderRepository.save(newPost);

    response.send(newPost);
  }

  private getAllOrders = async (request: express.Request, response: express.Response) => {
    const orders = await this.orderRepository.find();
    response.send(orders);
  }
}

export default OrderController;
