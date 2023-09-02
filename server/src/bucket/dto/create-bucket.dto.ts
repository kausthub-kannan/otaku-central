import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateBucketDto {
  @IsString()
  user_id: string;

  @IsOptional()
  @IsNumber()
  sequential_number?: number;

  @IsOptional()
  @IsString()
  wiki_id?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsBoolean()
  ongoing?: boolean;

  @IsOptional()
  @IsBoolean()
  dropped?: boolean;
}
