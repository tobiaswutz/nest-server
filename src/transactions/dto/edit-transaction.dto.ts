import { Decimal } from "@prisma/client/runtime";
import { IsDate, IsDecimal, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditTransactionDto {
    @IsString()
    @IsOptional()
    inflowSymbol?: string;

    @IsString()
    @IsOptional()
    outflowSymbol?: string;

    @IsDecimal()
    @IsOptional()

    inflowAmount?: Decimal

    @IsDecimal()
    @IsOptional()
    outflowAmount?: Decimal

    @IsDecimal()
    @IsOptional()
    inflowSymbolUsdPrice?: Decimal

    @IsDecimal()
    @IsOptional()
    outflowSymbolUsdPrice?: Decimal

    @IsNotEmpty()
    @IsString()
    transactionTime: string;

    @IsOptional()
    @IsString()
    feeSymbol?: string;

    @IsOptional()
    @IsDecimal()
    feeAmount?: Decimal;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    walletAddress?: string;

    @IsOptional()
    @IsString()
    tradingPlatform?: string;

    @IsOptional()
    @IsString()
    transactionId?: string;
}