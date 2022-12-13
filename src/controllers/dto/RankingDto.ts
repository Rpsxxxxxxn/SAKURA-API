import { IsNotEmpty } from "class-validator";

export class RankingDto {
    @IsNotEmpty({ message: 'ゲームモードが設定されていません。' })
    gamemode!: string;
    @IsNotEmpty({ message: 'ユーザ名が設定されていません。' })
    username!: string;
    @IsNotEmpty({ message: '質量が設定されていません。' })
    mass!: number;
}