import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditTransactionListDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}