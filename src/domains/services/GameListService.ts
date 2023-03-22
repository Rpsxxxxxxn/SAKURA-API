import fs from 'fs';

export default class GameListService {

  private constructor() {}

  /**
   * ファイルを保存する
   * @param gameName 
   * @param file 
   */
  public async saveFile(gameName: string, file: any) {
    const fileName = file.originalname;
    const fileExtension = fileName.split('.').pop();
    const filePath = `./public/upload/${gameName}.${fileExtension}`;
    const fileData = file.buffer;

    await this.writeFile(filePath, fileData);
  }

  /**
   * ファイルを書き込む
   * @param filePath 
   * @param fileData 
   * @returns 
   */
  private async writeFile(filePath: string, fileData: any) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, fileData, (err) => {
        if (err) {
          reject(err);
        }
        resolve('OK');
      });
    });
  }

  public static create(): GameListService {
    return new GameListService();
  }
}