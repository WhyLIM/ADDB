// routes/biomarkers.js
import express from 'express';
import db from '../db.js'; // 引入数据库连接
const router = express.Router();

// GET /biomarkers - 获取所有 biomarker，支持筛选和分页
router.get('/', async (req, res) => {
    const { name, type, limit = 10, offset = 0 } = req.query;
    let query = 'SELECT * FROM biomarkers WHERE 1=1';
    const params = [];

    if (name) {
        query += ' AND `Biomarker(abbr.)` LIKE ?';
        params.push(`%${name}%`);
    }

    if (type) {
        query += ' AND type = ?';
        params.push(type);
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(Number(limit), Number(offset));

    try {
        const [biomarkers] = await db.query(query, params);
        res.status(200).json(biomarkers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET /biomarkers/filters - 获取筛选条件
router.get('/filters', async (req, res) => {
    const queries = [
        { field: 'Category', query: 'SELECT DISTINCT Category FROM biomarkers WHERE Category IS NOT NULL' },
        { field: 'Source', query: 'SELECT DISTINCT Source FROM biomarkers WHERE Source IS NOT NULL' },
        { field: 'Application', query: 'SELECT DISTINCT Application FROM biomarkers WHERE Application IS NOT NULL' }
    ];

    try {
        const filterResults = await Promise.all(
            queries.map(async ({ field, query }) => {
                const [results] = await db.query(query); // 使用 Promise 版本的 query
                // console.log(`Results for ${field}:`, results); // 打印查询结果
                const data = results.map(row => row[field]);
                return { field, data };
            })
        );

        // 将查询结果整合到一个对象中
        const filters = {};
        filterResults.forEach(({ field, data }) => {
            filters[field] = data;
        });

        // console.log("Combined Filters Object:", filters);  // 打印最终的 filters 对象
        res.json(filters);
    } catch (error) {
        console.error('Error in /filters route:', error);
        res.status(500).send({ message: error.message });
    }
});


// GET /biomarkers/:id - 根据 ID 获取 biomarker 详情
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [biomarker] = await db.query('SELECT * FROM biomarkers WHERE id = ?', [id]);
        if (biomarker.length === 0) {
            return res.status(404).json({ message: 'Biomarker not found' });
        }
        res.status(200).json(biomarker[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;
