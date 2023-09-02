import { IsString, IsUUID, IsOptional, IsNumber } from 'class-validator';

export class CreateNexusDto {

  @IsOptional()
  @IsUUID()
  user_id?: string;

  @IsOptional()
  @IsUUID()
  reply_to?: string;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsNumber()
  upvotes?: number;

  @IsOptional()
  @IsUUID()
  chronicle_id?: string;
}

