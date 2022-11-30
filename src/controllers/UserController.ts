import { response, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams, Res } from "routing-controllers";
import { UserEntity } from "../domains/entities/UserEntity";
import { UserType } from "../domains/models/UserType";
import IUserRepository from "../domains/repositories/UserRepository";
import UserService from "../domains/services/UserService";
import { Authority } from "../domains/valueobjects/Authority";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import UserSQLite from "../infrastructures/sqlite/UserSQLite";
import { UserDto } from './dto/UserDto';

@JsonController()
export class UserController {
    private userService: UserService = UserService.create();
    private userRepository: IUserRepository = new UserSQLite();

    /**
     * ユーザの全取得
     * @param query 
     * @returns 
     */
    @Get('/users')
    @OnUndefined(404)
    async findAll(@QueryParams() query: any) {
        return await this.userRepository.findAll();
    }

    /**
     * ユーザの取得
     * @param query 
     * @returns 
     */
    @Get('/users/:id')
    @OnUndefined(404)
    async find(@Param('id') id: number) {
        return await this.userRepository.find(id);
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/users/add')
    async add(@Body() body: UserDto, @Res() response: Response) {
        const hashedPassword = this.userService.hashPassword(body.password);

        const entity: UserEntity = UserEntity.create('', {
            username: UserName.create({ name: body.username }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: body.email,
            password: hashedPassword,
            imageUrl: body.imageUrl,
            createdAt: Time.create({date: new Date().toLocaleString()}),
            updatedAt: Time.create({date: new Date().toLocaleString()})
        })
        await this.userRepository.insert(entity);
        return response.send('OK');
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/users/update/:id')
    async update(@Param('id') id: number, @Body() body: UserDto, @Res() response: Response) {
        const entity: UserEntity = UserEntity.create(id.toString(), {
            username: UserName.create({ name: body.username }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: body.email,
            password: body.password,
            imageUrl: body.imageUrl,
            createdAt: Time.create({date: new Date().toLocaleString()}),
            updatedAt: Time.create({date: new Date().toLocaleString()})
        })
        await this.userRepository.update(entity);
        return response.send('OK');
    }

    /**
     * ユーザの削除
     * @param id 
     * @returns 
     */
    @Delete('/users/:id')
    async delete(@Param('id') id: number) {
        await this.userRepository.remove(id);
        return response.send('OK');
    }
}