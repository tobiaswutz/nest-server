import { Decimal } from "@prisma/client/runtime";
import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class EditTransactionDto {
    @IsString()
    @IsNotEmpty()
    inflowSymbol: string;
    @IsString()
    @IsNotEmpty()
    outflowSymbol: string;
    @IsDecimal()
    @IsNotEmpty()
    inflowAmount: Decimal;
    @IsDecimal()
    @IsNotEmpty()
    outflowAmount: Decimal;
    @IsDecimal()
    @IsNotEmpty()
    inflowSymbolUsdPrice: Decimal;
    @IsNotEmpty()
    @IsDecimal()
    outflowSymbolUsdPrice: Decimal;
    @IsOptional()
    transactionTime?: Date;
    @IsString()
    @IsOptional()
    feeSymbol?: string;
    @IsOptional()
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