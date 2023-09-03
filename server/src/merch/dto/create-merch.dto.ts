import { IsOptional, IsInt, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateMerchDto {
    @IsOptional()
    @IsString()
    merch_id: string;
  
    @IsOptional()
    @IsInt()
    req_nani: number | null;
  
    @IsOptional()
    @IsNumber()
    rating: number | null;
  
    @IsOptional()
    @IsString()
    description: string | null;
  
    @IsOptional()
    @IsString()
    merch: string | null;
  
    @IsOptional()
    @IsString()
    seller_id: string | null;
  
    @IsOptional()
    @IsString()
    image: string | null;
  
    @IsOptional()
    @IsBoolean()
    avalibility_status: boolean | null;
  }
