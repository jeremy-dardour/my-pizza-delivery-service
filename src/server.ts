import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import * as config from './ormconfig';
import PizzaController from './pizza/pizza.controller';
import validateEnv from './utils/validateEnv';

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
      new PizzaController(),
    ],
  );
  app.listen();
})();
