import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeasonDto {
  @IsString()
  wiki_id: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  poster?: string;

  @IsOptional()
  @IsNumber()
  episode_list?: number;

  @IsString()
  season_id: string;

  @IsOptional()
  @IsNumber()
  season_number?: number;
}
