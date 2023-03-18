export default interface IFirebaseUserRepository {
    /**
     * メールアドレスとパスワードでユーザーを作成する
     * @param email 
     * @param password 
     */
    signUpWithEmailAndPassword(email: string, password: string): Promise<string>;

    /**
     * メールアドレスとパスワードでユーザーをログインする
     * @param email 
     * @param password 
     */
    signInWithEmailAndPassword(email: string, password: string): Promise<string>;

    /**
     * IDトークンからユーザー情報を取得する
     * @param accessToken 
     */
    getUidForIdToken(idToken: string): Promise<string>;
}