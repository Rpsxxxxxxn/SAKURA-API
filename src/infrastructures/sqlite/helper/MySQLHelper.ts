const mysql = require("mysql");

export default class MySQLHelper {
  public static async connect() {
    return new Promise((resolve, reject) => {
      const db = mysql.createConnection({
        host: process.env.SAKURA_API_DB_HOST,
        port: process.env.SAKURA_API_DB_PORT,
        user: process.env.SAKURA_API_DB_USER,
        password: process.env.SAKURA_API_DB_PASSWORD,
        database: process.env.SAKURA_API_DB_NAME,
      });
      db.connect((err: any) => {
        if (err) reject(err);
        else resolve(db);
      });
    });
  }
}