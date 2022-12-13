import bcrypt from 'bcrypt';

export default class UserService {
    private static readonly SALT_OR_ROUNDS = 10;

    private constructor() {}

    /**
     * パスワードのハッシュ化
     * @param password 入力されたパスワード
     */
    public hashPassword(password: string): string {
        return bcrypt.hashSync(password, UserService.SALT_OR_ROUNDS);
    }

    /**
     * パスワードが一致しているか検査
     * @param password 入力されたパスワード
     * @param hashedPassword ハッシュ化されたパスワード
     * @returns 
     */
    public comparePassword(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword);
    }

    /**
     * インスタンス生成
     * @returns UserService
     */
    public static create(): UserService {
        return new UserService();
    }
}