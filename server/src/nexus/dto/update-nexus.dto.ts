import { PartialType } from '@nestjs/mapped-types';
import { CreateNexusDto } from './create-nexus.dto';

export class UpdateNexusDto extends PartialType(CreateNexusDto) {}
