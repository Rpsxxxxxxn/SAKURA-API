import { response, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Res } from "routing-controllers";
import { UserEntity } from "../domains/entities/UserEntity";
import { UserModel } from "../domains/models/UserModel";
import IFirebaseUserRepository from "../domains/repositories/FirebaseUserRepository";
import IUserRepository from "../domains/repositories/UserRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import FirebaseUser from "../infrastructures/FirebaseUser";
import UserSQLite from "../infrastructures/sqlite/UserSQLite";
import { UserDto } from './dto/UserDto';

@JsonController('/user')
export class UserController {
    private userRepository: IUserRepository = UserSQLite.create();
    private firebaseRepository: IFirebaseUserRepository = FirebaseUser.create();

    /**
     * ユーザの全取得 
     * @returns {Array<UserEntity>} ユーザ情報配列
     */
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll() {
        const userEntityList: Array<UserEntity> = await this.userRepository.findAll();
        const userDtoList: Array<UserDto> = new Array<UserDto>;
        userEntityList.forEach(user => {
            userDtoList.push(UserModel.create(user).responseBody());
        });
        return userDtoList;
    }

    /**
     * ユーザの取得
     * @param {number} id 検索したいユーザID 
     * @returns {Response}
     */
    @Get('/find/:id')
    @OnUndefined(404)
    public async find(@Param('id') id: number) {
        const userEntity: UserEntity = await this.userRepository.find(id);
        return UserModel.create(userEntity).responseBody();
    }

    /**
     * ユーザの追加・更新
     * @param {UserDto} body クライアント側から発行されたデータ
     * @returns {Response}
     */
    @Post('/insert')
    public async insert(@Param('accessToken') accessToken: string, @Body() body: UserDto, @Res() response: Response) {
        const uid = await this.firebaseRepository.getUserIdForAccessToken(accessToken);
        const entity: UserEntity = UserEntity.create(0, {
            uid: uid,
            username: UserName.create({ name: body.username }),
            profileImageURL: body.profileImageURL,
            createdAt: Time.create({ value: '' }),
            updatedAt: Time.create({ value: '' })
        })
        await this.userRepository.insert(entity);
        return response.send('OK');
    }

    /**
     * ユーザの追加・更新
     * @param {UserDto} body クライアント側から発行されたデータ
     * @returns {Response}
     */
    @Post('/update/:id')
    public async update(@Param('id') id: number, @Body() body: UserDto, @Res() response: Response) {
        const user: UserEntity = await this.userRepository.find(id);
        await this.userRepository.update(UserEntity.create(id, {
            username: UserName.create({ name: body.username }),
            uid: user.uid,
            profileImageURL: body.profileImageURL,
            createdAt: Time.create({ value: '' }),
            updatedAt: Time.create({ value: '' })
        }));
        return response.send('更新が完了しました。');
    }

    /**
     * ユーザの削除
     * @param {number} id ユーザID
     * @returns {Response}
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number) {
        await this.userRepository.remove(id);
        return response.send('削除されました。');
    }
}