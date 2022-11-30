import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { UserEntity } from "../domains/entities/UserEntity";
import { UserType } from "../domains/models/UserType";
import IUserRepository from "../domains/repositories/UserRepository";
import { Authority } from "../domains/valueobjects/Authority";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import UserSQLite from "../infrastructures/sqlite/UserSQLite";
import { UserDto } from './dto/UserDto';

@JsonController()
export class UserController {
    /**
     * ユーザの全取得
     * @param query 
     * @returns 
     */
    @Get('/users')
    async getAll(@QueryParams() query: any) {
        const userRepository: IUserRepository = new UserSQLite();
        const datalist: UserEntity[] = await userRepository.findAll();
        return datalist;
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/users')
    async update(@Body() body: UserDto) {
        const userRepository: IUserRepository = new UserSQLite();
        await userRepository.save(UserEntity.create('', {
            username: UserName.create({ name: '' }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: '',
            password: '',
            imageUrl: '',
            createdAt: Time.create({date: new Date().toLocaleString()}),
            updatedAt: Time.create({date: new Date().toLocaleString()})
        }));
        return {};
    }

    /**
     * ユーザの削除
     * @param id 
     * @returns 
     */
    @Delete('/users/:id')
    async delete(@Param('id') id: number) {
        const userRepository: IUserRepository = new UserSQLite();
        await userRepository.remove(id);
        return;
    }
}