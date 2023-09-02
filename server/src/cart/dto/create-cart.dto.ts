import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateCartDto {

  @IsUUID()
  user_id: string;

  @IsUUID()
  merch_id: string;

  @IsOptional()
  @IsString()
  status?: string;
}
