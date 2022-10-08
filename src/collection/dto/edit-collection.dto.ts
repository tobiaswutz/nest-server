import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditCollectionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}