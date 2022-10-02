import { Decimal } from "@prisma/client/runtime";
import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    baseSymbol: string;

    @IsString()
    quoteSymbo: string;
    
    @IsDecimal()
    @IsNotEmpty()
    baseAmount: Decimal;

    @IsDecimal()
    @IsNotEmpty()
    quoteAmount: Decimal;

    @IsString()
    @IsNotEmpty()
    side: string;

    @IsDecimal()
    @IsNotEmpty()
    price: Decimal;

    @IsNotEmpty()
    filledTime: Date;

    @IsOptional()
    @IsString()
    feeSymbol?: string;

    @IsOptional()
    @IsDecimal()
    feeAmount?: Decimal;

    @IsOptional()
    @IsString()
    exchange?: string;

    @IsOptional()
    @IsString()
    externalId?: string;
};