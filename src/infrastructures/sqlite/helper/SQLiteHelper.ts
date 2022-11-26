import sqlite3, { RunResult, Statement } from 'sqlite3';
import { join } from 'path';

class SQLiteHelper {
    public static readonly CONNECTION_URL = './sakura.db';
    // public static readonly sqlite = new sqlite3.Database(join(__dirname, '.db'));

    /**
     * SQL実行
     * @param sql 
     * @param params 
     * @returns 
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
     * @param sql 
     * @param params 
     * @returns 
     */
    static async get(sql: string, ...params: any) {
        return new Promise<any>((resolve, reject) => {
            const db = new sqlite3.Database(SQLiteHelper.CONNECTION_URL);
            db.get(sql, params, (result: Statement, err: Error | null, row: any) => {
                if (err) throw err;
                else resolve(row);
            });
            db.close();
        })
    }

    /**
     * SQL実行（全取得）
     * @param sql 
     * @param params 
     * @returns 
     */
    static async all(sql: string, ...params: any) {
        return new Promise<any[]>((resolve, reject) => {
            const db = new sqlite3.Database(SQLiteHelper.CONNECTION_URL);
            db.all(sql, params, (result: Statement, err: Error | null, rows: any[]) => {
                if (err) throw err;
                else resolve(rows);
            });
            db.close();
        })
    }
}

export default SQLiteHelper;