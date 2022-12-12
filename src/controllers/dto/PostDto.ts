import { IsDate, MinLength } from "class-validator";

export class PostDto {
    @MinLength(1, { message: 'タイトルが入力されていません。' })
    title!: string;
    @MinLength(1, { message: 'タイトルが入力されていません。' })
    detail!: string;
    @IsDate({ message: '開始日時が指定されていません。' })
    startDate!: string;
    @IsDate({ message: '終了日時が指定されていません。' })
    endDate!: string;
    isSuccess!: boolean;
}