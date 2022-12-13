import { IsNotEmpty } from "class-validator";

export class ExperienceDto {
    @IsNotEmpty({ message: 'ユーザ名が入力されていません。' })
    username!: string;
    mass!: number;
}