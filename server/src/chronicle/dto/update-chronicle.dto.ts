import { PartialType } from '@nestjs/mapped-types';
import { CreateChronicleDto } from './create-chronicle.dto';

export class UpdateChronicleDto extends PartialType(CreateChronicleDto) {}
