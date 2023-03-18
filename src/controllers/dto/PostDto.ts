import { IsDate, MinLength } from "class-validator";

export class PostDto {
    id!: number;
    @MinLength(1, { message: 'タイトルが入力されていません。' })
    title!: string;
    @IsDate({ message: '開始日時が指定されていません。' })
    startDate!: string;
    @IsDate({ message: '終了日時が指定されていません。' })
    endDate!: string;
    isSuccess!: boolean;
    createdAt!: string;
    updatedAt!: string;
}