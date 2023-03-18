import { IsNotEmpty } from "class-validator";

export class ServerListDto {
    id!: number;
    @IsNotEmpty({ message: 'タイトルが入力されていません。' })
    name!: string;
    detail!: string;
    @IsNotEmpty({ message: 'ゲームモードが入力されていません。' })
    gamemode!: string;
    @IsNotEmpty({ message: 'IPアドレスが入力されていません。' })
    address!: string;
    @IsNotEmpty({ message: 'PORTが入力されていません。' })
    port!: string;
    createdAt!: string;
    updatedAt!: string;
}