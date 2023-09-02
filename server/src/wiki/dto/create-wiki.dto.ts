import {IsArray, IsDecimal, IsNumber, IsOptional, IsString, IsUrl, IsUUID} from "class-validator";

export class CreateWikiDto {
    @IsOptional()
    @IsString()
    anime_name?: string;
  
    @IsOptional()
    @IsString()
    poster?: string;
  
    @IsOptional()
    @IsString()
    summary?: string;
  
    @IsOptional()
    @IsString()
    status?: string;
  
    @IsOptional()
    @IsNumber()
    rating?: number;
  
    @IsOptional()
    @IsArray()
    genre?: string[];
  
    @IsOptional()
    mod_id?: string;
  }
