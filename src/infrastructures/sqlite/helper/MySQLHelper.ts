const mysql = require("mysql");

export default class MySQLHelper {
  constructor() {}

  public static async connect() {
    return new Promise((resolve, reject) => {
      const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "test",
      });
      db.connect((err: any) => {
        if (err) reject(err);
        else resolve(db);
      });
    });
  }
}