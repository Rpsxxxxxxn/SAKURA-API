import axios from "axios";
import IFirebaseUserRepository from "../domains/repositories/FirebaseUserRepository";

class FirebaseUser implements IFirebaseUserRepository {
    static readonly FIREBASE_LOOKUP_API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + process.env.SAKURA_API_FB_APP_ID;

    /**
     * アクセストークンからユーザー情報を取得する
     * @param accessToken 
     */
    public async getUserIdForAccessToken(accessToken: string): Promise<string> {
        const headers = { 'Authorization': `Bearer ${accessToken}` };
        return new Promise((resolve, reject) => {
            axios.post(FirebaseUser.FIREBASE_LOOKUP_API_URL, {}, { headers })
              .then(response => {
                const uid = response.data.users[0].localId;
                resolve(uid);
              })
              .catch(error => reject(error));
        });
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