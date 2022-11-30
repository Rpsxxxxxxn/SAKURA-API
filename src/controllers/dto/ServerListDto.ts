import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class ServerListDto {
    @IsNotEmpty()
    name?: string;
    @IsNotEmpty()
    detail?: string;
    @IsNotEmpty()
    address?: string;
    @IsNotEmpty()
    port?: string;
}