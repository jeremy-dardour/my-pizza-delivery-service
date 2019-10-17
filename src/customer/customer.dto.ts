import { IsString } from 'class-validator';

class CreateCustomerDto {
  @IsString()
  public name: string;
  @IsString()
  public address: string;
}

export default CreateCustomerDto;
