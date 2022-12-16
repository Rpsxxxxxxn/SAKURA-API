import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class ServerListDto {
    id!: number;
    @IsNotEmpty({ message: 'タイトルが入力されていません。' })
    name!: string;
    @IsNotEmpty({ message: '詳細が設定されていません。' })
    detail!: string;
    @IsNotEmpty({ message: 'IPアドレスが入力されていません。' })
    address!: string;
    @IsNotEmpty({ message: 'PORTが入力されていません。' })
    port!: string;
    createdAt!: string;
    updatedAt!: string;
}