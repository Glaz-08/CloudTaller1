import { IsString, IsNumber, Min } from 'class-validator';

export class InfoDto {
  @IsString()
  nombre!: string;

  @IsNumber()
  @Min(0)
  edad!: number;

  @IsNumber()
  @Min(0.001)
  n!: number;
}
