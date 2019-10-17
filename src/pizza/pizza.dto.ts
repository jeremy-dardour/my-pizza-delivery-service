import { IsNumber, IsString } from 'class-validator';

class CreatePizzaDto {
  @IsString()
  public type: string;
  @IsNumber()
  public size: number;
}

export default CreatePizzaDto;
