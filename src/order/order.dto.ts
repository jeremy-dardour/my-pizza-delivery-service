import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator';
import CreateCustomerDto from '../customer/customer.dto';
import CreatePizzaDto from '../pizza/pizza.dto';
import DeliveryStatus from './deliveryStatus.enum';

class CreateOrderDto {
  @IsOptional()
  @IsEnum(DeliveryStatus)
  public deliveryStatus?: DeliveryStatus;

  @ValidateNested()
  @IsDefined()
  public customer: CreateCustomerDto;

  @ValidateNested()
  @IsDefined()
  public pizzas: CreatePizzaDto[];
}

export default CreateOrderDto;
