import sqlite3, { RunResult, Statement } from 'sqlite3';
import { join } from 'path';

class SQLiteHelper {
    // public static readonly CONNECTION_URL = 'sakura.db';
    public static readonly CONNECTION_URL = join(process.cwd(), 'dist/sakura.db');
    // public static readonly sqlite = new sqlite3.Database(join(__dirname, 'sakura.db'));

    /**
     * SQL実行
     * @param {string} sql SQLクエリ
     * @param {any} params 引き渡すパラメータ
     * @returns {Promise<RunResult>}
     */
    static async execute(sql: string, ...params: any) {
        return new Promise<RunResult>((resolve, reject) => {
            const db = new sqlite3.Database(SQLiteHelper.CONNECTION_URL);
            db.run(sql, params, (result: RunResult, err: Error | null) => {
                if (err) throw err;
                else resolve(result);
            });
            db.close();
        })
    }

    /**
     * SQL実行（取得）
     * @param {string} sql SQLクエリ
     * @param {any} params 引き渡すパラメータ
     * @returns {Promise<any>} 取得したパラメータ
     */
    static async get(sql: string, ...params: any[]) {
        return new Promise<any>((resolve, reject) => {
            const db = new sqlite3.Database(SQLiteHelper.CONNECTION_URL);
            db.get(sql, params, (err: Error | null, row: any) => {
                if (err) throw err;
                else resolve(row);
            });
            db.close();
        })
    }

    /**
     * SQL実行（全取得）
     * @param {string} sql SQLクエリ
     * @param {any} params 引き渡すパラメータ
     * @returns {Promise<any[]>} 取得したパラメータ
     */
    static async all(sql: string, params: any[]) {
        return new Promise<any[]>((resolve, reject) => {
            const db = new sqlite3.Database(SQLiteHelper.CONNECTION_URL);
            db.all(sql, params, (err: Error | null, rows: any[]) => {
                if (err) throw err;
                else resolve(rows);
            });
            db.close();
        })
    }
}

export default SQLiteHelper;