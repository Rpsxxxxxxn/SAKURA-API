export default interface IFirebaseUserRepository {
    /**
     * アクセストークンからユーザー情報を取得する
     * @param accessToken 
     */
    getUserIdForAccessToken(accessToken: string): Promise<string>;
}