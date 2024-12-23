// app.js
import express from 'express';
import cors from 'cors'; // 引入 CORS 中间件
import dotenv from 'dotenv';
import biomarkersRouter from './routes/biomarkers.js';

// 加载环境变量
dotenv.config();

const app = express();

// 使用 CORS 中间件，根据需要配置允许的来源
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', // 环境变量指定来源，默认允许所有
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 限制允许的方法
}));

app.use(express.json()); // 解析 JSON 请求体

// 注册 biomarkers 路由
app.use('/api/biomarkers', biomarkersRouter);

export default app;
