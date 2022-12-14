import { response, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Patch, Post, QueryParams, Res } from "routing-controllers";
import { UserEntity } from "../domains/entities/UserEntity";
import { UserType } from "../domains/models/UserType";
import IUserRepository from "../domains/repositories/UserRepository";
import UserService from "../domains/services/UserService";
import { Authority } from "../domains/valueobjects/Authority";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import UserSQLite from "../infrastructures/sqlite/UserSQLite";
import { UserDto } from './dto/UserDto';

@JsonController('/user')
export class UserController {
    private userService: UserService = UserService.create();
    private userRepository: IUserRepository = UserSQLite.create();

    /**
     * ユーザの全取得
     * @param query 
     * @returns 
     */
    @Get('/all')
    @OnUndefined(404)
    public async findAll() {
        return await this.userRepository.findAll();
    }

    /**
     * ユーザの取得
     * @param query 
     * @returns 
     */
    @Get('/get/:id')
    @OnUndefined(404)
    public async find(@Param('id') id: number) {
        console.log(`ID: ${id}`);
        return await this.userRepository.find(id);
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/add')
    public async add(@Body() body: UserDto, @Res() response: Response) {
        const hashedPassword = this.userService.hashPassword(body.password);
        const entity: UserEntity = UserEntity.create(0, {
            username: UserName.create({ name: body.username }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: body.email,
            password: hashedPassword,
            imageUrl: body.imageUrl,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        })
        await this.userRepository.insert(entity);
        return response.send('OK');
    }

    /**
     * ユーザの追加・更新
     * @param body 
     * @returns 
     */
    @Post('/update/:id')
    public async update(@Param('id') id: number, @Body() body: UserDto, @Res() response: Response) {
        const oldEntity: UserEntity = await this.userRepository.find(id);
        if (!this.userService.comparePassword(body.password, oldEntity.password)) {
            return response.send('パスワードが間違えています。');
        }
        await this.userRepository.update(UserEntity.create(id, {
            username: UserName.create({ name: body.username }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: body.email,
            password: body.password,
            imageUrl: body.imageUrl,
            createdAt: Time.create({ value: oldEntity.createdAt }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        }));
        return response.send('更新が完了しました。');
    }

    /**
     * ユーザの削除
     * @param id 
     * @returns 
     */
    @Delete('/delete/:id')
    public async delete(@Param('id') id: number) {
        console.log(`ID: ${id}`);
        const entity: UserEntity = await this.userRepository.find(id);
        // 管理者以外の場合
        if (entity.authority !== UserType.ADMIN) {
            return response.send('権限がありません。');
        }
        // 削除処理の実行
        await this.userRepository.remove(id);
        return response.send('OK');
    }
}