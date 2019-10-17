import { IsNumber, IsString, ValidateNested } from 'class-validator';
import CreateCustomerDto from '../customer/customer.dto';
import CreatePizzaDto from '../pizza/pizza.dto';

class CreateOrderDto {
  @IsString()
  public type: string;

  @IsNumber()
  public size: number;

  @ValidateNested()
  public customer: CreateCustomerDto;

  @ValidateNested()
  public pizzas: CreatePizzaDto[];
}

export default CreateOrderDto;
