import { UserType } from './../../../domains/models/UserType';
import {UserEntity} from "../../../domains/entities/UserEntity";
import IUserCreateRepository from "../../../domains/repositories/UserRepository";
import { Authority } from "../../../domains/valueobjects/Authority";
import { UserName } from "../../../domains/valueobjects/UserName";
import { Time } from '../../../domains/valueobjects/Time';

class UserCreateSQLiteFake implements IUserCreateRepository {

    /**
     * ユーザの削除を行う
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        console.log(id);
    }

    /**
     * ユーザの全取得
     */
    public async findAll(): Promise<UserEntity[]> {
        const users: UserEntity[] = new Array<UserEntity>();
        users.push(UserEntity.create('0', {
            username: UserName.create({ name: 'TestUser1' }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: '',
            password: '',
            imageUrl: '',
            createdAt: Time.create({ date: '2022/12/10 12:00:00' }),
            updatedAt: Time.create({ date: '2022/12/10 12:00:00' })
        }));
        users.push(UserEntity.create('1', {
            username: UserName.create({ name: 'TestUser2' }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: '',
            password: '',
            imageUrl: '',
            createdAt: Time.create({ date: '2022/12/10 12:00:00' }),
            updatedAt: Time.create({ date: '2022/12/10 12:00:00' })
        }));
        return users;
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    public async find(id: number): Promise<UserEntity> {
        return UserEntity.create('0', {
            username: UserName.create({ name: 'TestUser3' }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: '',
            password: '',
            imageUrl: '',
            createdAt: Time.create({ date: '2022/12/10 12:00:00' }),
            updatedAt: Time.create({ date: '2022/12/10 12:00:00' })
        });
    }

    /**
     * 追加を行う
     * @param model ユーザデータ
     */
    public async insert(model: UserEntity): Promise<void> {
        console.log(model);
    }

    /**
     * 更新を行う
     * @param model ユーザデータ
     */
    public async update(model: UserEntity): Promise<void> {
        console.log(model);
    }
}

export default UserCreateSQLiteFake;