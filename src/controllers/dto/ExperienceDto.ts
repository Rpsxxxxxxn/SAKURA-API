import { IsNotEmpty } from "class-validator";

export class ExperienceDto {
    id!: number;
    @IsNotEmpty({ message: 'ユーザ名が入力されていません。' })
    username!: string;
    mass!: number;
    createdAt!: string;
    updatedAt!: string;
}