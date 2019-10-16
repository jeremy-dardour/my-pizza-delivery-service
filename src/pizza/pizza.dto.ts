import { IsString } from 'class-validator';

class CreatePizzaDto {
  @IsString()
  public type: string;
  @IsString()
  public size: number;
}

export default CreatePizzaDto;
