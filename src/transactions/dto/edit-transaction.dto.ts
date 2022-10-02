import { Decimal } from "@prisma/client/runtime";
import { IsDecimal, IsOptional, IsString } from "class-validator";

export class EditTransactionDto {
    @IsOptional()
    @IsString()
    baseSymbol?: string;

    @IsOptional()
    @IsString()
    quoteSymbo?: string;

    @IsOptional()
    @IsDecimal()
    baseAmount?: Decimal;

    @IsOptional()
    @IsDecimal()
    quoteAmount?: Decimal;

    @IsOptional()
    @IsString()
    side?: string;

    @IsOptional()
    @IsDecimal()
    price?: Decimal;

    @IsOptional()
    filledTime?: Date;

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
}