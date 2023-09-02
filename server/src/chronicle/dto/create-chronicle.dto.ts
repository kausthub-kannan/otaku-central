import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateChronicleDto {

  @IsOptional()
  @IsString()
  texts?: string;

  @IsOptional()
  @IsNumber()
  likes?: number;

  @IsOptional()
  @IsString()
  writer_id?: string;
}
