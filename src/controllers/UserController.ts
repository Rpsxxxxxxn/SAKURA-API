import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams, Res } from "routing-controllers";
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
    @OnUndefined(404)
    async findAll(@QueryParams() query: any) {
        const userRepository: IUserRepository = new UserSQLite();
        return await userRepository.findAll();
    }

    /**
     * ユーザの取得
     * @param query 
     * @returns 
     */
    @Get('/users/:id')
    @OnUndefined(404)
    async find(@Param('id') id: number) {
        const userRepository: IUserRepository = new UserSQLite();
        return await userRepository.find(id);
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/users')
    async update(@Body() body: UserDto, @Res() response: Response) {
        const userRepository: IUserRepository = new UserSQLite();
        await userRepository.save(UserEntity.create('', {
            username: UserName.create({ name: body.username }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: body.email,
            password: body.password,
            imageUrl: body.imageUrl,
            createdAt: Time.create({date: new Date().toLocaleString()}),
            updatedAt: Time.create({date: new Date().toLocaleString()})
        }));
        return response.send('OK');
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