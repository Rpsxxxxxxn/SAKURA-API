import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
    id!: number;
    @MinLength(3, { message: 'ユーザ名を3文字以上で入力してください。' })
    username!: string;
    @IsEmail()
    @IsNotEmpty({ message: 'メールアドレスが入力されていません。' })
    email!: string;
    @MinLength(6, { message: 'パスワードは6桁以上で入力してください。' })
    password!: string;
    imageUrl!: string;
    createdAt!: string;
    updatedAt!: string;
}