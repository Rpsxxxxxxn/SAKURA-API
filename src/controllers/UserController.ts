import { response, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Res } from "routing-controllers";
import { UserModel } from "../domains/models/UserModel";
import IFirebaseUserRepository from "../domains/repositories/FirebaseUserRepository";
import IUserRepository from "../domains/repositories/UserRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import FirebaseUser from "../infrastructures/FirebaseUser";
import UserSQLite from "../infrastructures/sqlite/UserSQLite";
import { UserEntity } from './../domains/entities/UserEntity';
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
        if (!userEntityList) {
            return response.status(404).send('ユーザが見つかりませんでした。');
        }
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
        if (!userEntity) {
            return response.status(404).send('ユーザが見つかりませんでした。');
        }
        return UserModel.create(userEntity).responseBody();
    }

    /**
     * ユーザの追加・更新
     * @param {UserDto} body クライアント側から発行されたデータ
     * @returns {Response}
     */
    @Post('/create/:idToken')
    public async create(@Param('idToken') idToken: string, @Body() body: UserDto, @Res() response: Response) {
        const uid = await this.firebaseRepository.getUidForIdToken(idToken);
        if (!uid) {
            return response.status(404).send('ユーザが見つかりませんでした。');
        }
        const userEntity: UserEntity = UserEntity.create(0, {
            uid: uid,
            username: UserName.create({ name: body.username }),
            profileImageURL: body.profileImageURL,
            createdAt: Time.create({ value: '' }),
            updatedAt: Time.create({ value: '' })
        })
        await this.userRepository.insert(userEntity);
        return response.status(201).send('登録が完了しました。');
    }

    /**
     * ユーザの追加・更新
     * @param {UserDto} body クライアント側から発行されたデータ
     * @returns {Response}
     */
    @Post('/update/:idToken')
    public async update(@Param('idToken') idToken: string, @Body() body: UserDto, @Res() response: Response) {
        const uid: string = await this.firebaseRepository.getUidForIdToken(idToken);
        const userEntity: UserEntity = await this.userRepository.findUserIdByUid(uid);
        if (!userEntity) {
            return response.status(404).send('ユーザが見つかりませんでした。');
        }
        await this.userRepository.update(UserEntity.create(userEntity.id, {
            username: UserName.create({ name: body.username }),
            uid: userEntity.uid,
            profileImageURL: body.profileImageURL,
            createdAt: Time.create({ value: '' }),
            updatedAt: Time.create({ value: '' })
        }));
        return response.status(201).send('更新が完了しました。');
    }

    /**
     * ユーザの削除
     * @param {number} id ユーザID
     * @returns {Response}
     */
    @Delete('/remove/:idToken')
    public async remove(@Param('idToken') idToken: string) {
        const uid: string = await this.firebaseRepository.getUidForIdToken(idToken);
        const userEntity: UserEntity = await this.userRepository.findUserIdByUid(uid);
        if (!userEntity) {
            return response.status(404).send('ユーザが見つかりませんでした。');
        }
        await this.userRepository.remove(userEntity.id);
        return response.status(201).send('削除が完了しました。');
    }
}