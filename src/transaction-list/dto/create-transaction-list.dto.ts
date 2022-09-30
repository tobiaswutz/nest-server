import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTransactionListDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}