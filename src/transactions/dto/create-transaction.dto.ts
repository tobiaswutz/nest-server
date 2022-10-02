import { Decimal } from "@prisma/client/runtime";
import { IsDecimal, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    baseSymbol: string;

    @IsString()
    @IsNotEmpty()
    quoteSymbol: string;

    // @IsDecimal()
    @IsNotEmpty()
    baseAmount: Decimal;

    // @IsDecimal()
    @IsNotEmpty()
    quoteAmount: Decimal;

    @IsString()
    @IsNotEmpty()
    side: string;

    // @IsDecimal()
    @IsNotEmpty()
    price: Decimal;

    @IsOptional()
    filledTime?: Date;

    @IsOptional()
    @IsString()
    feeSymbol?: string;

    @IsOptional()
    // @IsDecimal()
    feeAmount?: Decimal;

    @IsOptional()
    @IsString()
    exchange?: string;

    @IsOptional()
    @IsString()
    externalId?: string;
}