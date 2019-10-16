import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import Pizza from './pizza.entity';

class PizzaController implements Controller {
  public path = '/pizzas';
  public router = express.Router();
  private pizzaRepository = getRepository(Pizza);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPizzas);
  }

  private getAllPizzas = async (request: express.Request, response: express.Response) => {
    const pizzas = await this.pizzaRepository.find();
    response.send(pizzas);
  }
}

export default PizzaController;
