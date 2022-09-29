import { Decimal } from "@prisma/client/runtime";
import { IsDecimal, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    inflowSymbol: string;

    @IsString()
    outflowSymbol: string;

    @IsDecimal()
    inflowAmount: Decimal;

    @IsDecimal()
    outflowAmount: Decimal;

    @IsDecimal()
    inflowSymbolUsdPrice: Decimal;

    @IsDecimal()
    outflowSymbolUsdPrice: Decimal;

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