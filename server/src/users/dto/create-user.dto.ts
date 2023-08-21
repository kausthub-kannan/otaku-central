import {
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  IsInt,
  IsUrl,
} from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email_id: string;

  @IsString()
  guild: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsDateString()
  @IsOptional()
  joined_date?: Date;

  @IsInt()
  @IsOptional()
  nani?: number;

  @IsUrl()
  @IsOptional()
  avatar?: string;
}
