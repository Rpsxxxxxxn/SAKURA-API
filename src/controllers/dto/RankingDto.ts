import { IsNotEmpty } from "class-validator";

export class RankingDto {
    id!: number;
    @IsNotEmpty({ message: 'ゲームモードが設定されていません。' })
    gamemode!: string;
    @IsNotEmpty({ message: 'ユーザ名が設定されていません。' })
    username!: string;
    @IsNotEmpty({ message: '質量が設定されていません。' })
    mass!: number;
    createdAt!: string;
    updatedAt!: string;
}