// db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 创建数据库连接池
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'addb',
    password: process.env.DB_PASSWORD || 'lm000923',
    database: process.env.DB_NAME || 'addb',
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
    queueLimit: process.env.DB_QUEUE_LIMIT || 0,
});

// 使用 promise 方式进行数据库查询
const db = pool.promise();

export default db;
