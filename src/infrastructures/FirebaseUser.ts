import IFirebaseUserRepository from "../domains/repositories/FirebaseUserRepository";
import * as admin from 'firebase-admin';

class FirebaseUser implements IFirebaseUserRepository {
    /**
     * アクセストークンからユーザー情報を取得する
     * @param idToken 
     */
    public async getUidForIdToken(idToken: string): Promise<string> {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        return decodedIdToken.uid;
    }

    /**
     * メールアドレスとパスワードでユーザーを作成する
     * @param email 
     * @param password 
     * @returns 
     */
    public async signUpWithEmailAndPassword(email: string, password: string): Promise<string> {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password
        });
        return userRecord.uid;
    }

    /**
     * メールアドレスとパスワードでユーザーをログインする
     * @param email 
     * @param password 
     * @returns 
     */
    public async signInWithEmailAndPassword(email: string, password: string): Promise<string> {
        const userRecord = await admin.auth().getUserByEmail(email);
        return userRecord.uid;
    }

    /**
     * インスタンス生成
     * @returns {IFirebaseUserRepository}
     */
    public static create(): IFirebaseUserRepository {
        return new FirebaseUser();
    }
}

export default FirebaseUser;