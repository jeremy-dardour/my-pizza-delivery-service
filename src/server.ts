import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import * as config from './ormconfig';
import validateEnv from './utils/validateEnv';

import OrderController from './order/order.controller';
import PizzaController from './pizza/pizza.controller';

validateEnv();

(async () => {
  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new OrderController(),
      new PizzaController(),
    ],
  );
  app.listen();
})();
