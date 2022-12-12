import { IsEmail, MinLength } from "class-validator";

export class UserDto {
    @MinLength(3, { message: 'ユーザ名を3文字以上で入力してください。' })
    username!: string;
    @IsEmail()
    email!: string;
    @MinLength(6)
    password!: string;
    imageUrl!: string;
}