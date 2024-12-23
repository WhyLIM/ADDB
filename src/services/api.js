import axios from 'axios';

// 创建 Axios 实例，定义 API 的基础 URL
const api = axios.create({
    baseURL: 'http://localhost:3000/api'  // 后端 API 的基础 URL
});

// 获取 Biomarkers 数据
export const getBiomarkers = (params) => api.get('/biomarkers', { params });
// 获取筛选选项
export const getFilters = () => api.get('/biomarkers/filters');
// 获取特定 Biomarker 的详细信息
export const getBiomarkerDetails = (id) => api.get(`/biomarkers/${id}`);
// 创建新的 Biomarker
// export const createBiomarker = (biomarker) => api.post('/biomarkers', biomarker);
