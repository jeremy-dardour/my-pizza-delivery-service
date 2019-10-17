import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import Order from './order.entity';

class OrderController implements Controller {
  public path = '/orders';
  public router = express.Router();
  private orderRepository = getRepository(Order);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllOrders);
  }

  private getAllOrders = async (request: express.Request, response: express.Response) => {
    const orders = await this.orderRepository.find();
    response.send(orders);
  }
}

export default OrderController;
