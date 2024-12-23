<template>
    <el-container>
        <!-- 侧栏 -->
        <el-aside width="300px">
            <el-menu default-active="1" class="filter-menu">
                <el-menu-item index="1">
                    <el-icon>
                        <Filter />
                    </el-icon>
                    <span>Filter</span>
                </el-menu-item>
            </el-menu>
            <el-form :model="filters" label-width="80px">
                <el-form-item label="Category">
                    <el-select clearable v-model="filters.category" placeholder="Select Category">
                        <el-option v-for="category in filterOptions.Category" :key="category" :label="category"
                            :value="category"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Region">
                    <el-autocomplete clearable v-model="filters.region" :fetch-suggestions="fetchRegionSuggestions"
                        placeholder="Enter Region" value-key="value"></el-autocomplete>
                </el-form-item>
                <el-form-item label="Stage">
                    <el-select clearable v-model="filters.stage" placeholder="Select Stage">
                        <el-option v-for="stage in filterOptions.Stage" :key="stage" :label="stage"
                            :value="stage"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Location">
                    <el-select clearable v-model="filters.location" placeholder="Select Location">
                        <el-option v-for="location in filterOptions.Location" :key="location" :label="location"
                            :value="location"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Source">
                    <el-select clearable v-model="filters.source" placeholder="Select Source">
                        <el-option v-for="source in filterOptions.Source" :key="source" :label="source"
                            :value="source"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Application">
                    <el-select clearable v-model="filters.application" placeholder="Select Application">
                        <el-option v-for="application in filterOptions.Application" :key="application"
                            :label="application" :value="application"></el-option>
                    </el-select>
                </el-form-item>
                <el-button type="primary" @click="applyFilters">Apply Filters</el-button>
                <el-button type="success" @click="exportTable">Export Table</el-button>
            </el-form>
        </el-aside>

        <!-- 主体内容 -->
        <el-container>
            <el-main>
                <!-- 数据统计图表 -->
                <div ref="chart" style="width: 100%; height: 400px;"></div>
                <!-- 数据表格 -->
                <el-table v-loading="loading" :data="paginatedBiomarkers" stripe style="width: 100%"
                    @row-click="handleRowClick">
                    <el-table-column prop="ID" label="ID"></el-table-column>
                    <el-table-column prop="Biomarker" label="Biomarker"></el-table-column>
                    <el-table-column prop="Category" label="Category"></el-table-column>
                    <el-table-column prop="String_Name" label="String Name"></el-table-column>
                    <el-table-column prop="Discription" label="Description"></el-table-column>
                    <el-table-column prop="Region" label="Region"></el-table-column>
                    <el-table-column prop="Application" label="Application"></el-table-column>
                    <el-table-column prop="PMID" label="PMID"></el-table-column>
                    <!-- Add more columns as needed -->
                </el-table>
                <el-pagination background @current-change="handlePageChange" :current-page="currentPage"
                    :page-size="pageSize" layout="prev, pager, next" :total="filteredBiomarkers.length"
                    class="pagination"></el-pagination>
                <!-- 数据统计图表 -->
                <!-- <div ref="chart" style="width: 100%; height: 400px;"></div> -->
            </el-main>

            <!-- <el-footer>
            </el-footer> -->
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Filter } from '@element-plus/icons-vue';
import * as echarts from 'echarts';
import * as XLSX from 'xlsx';
import { getBiomarkers, getFilters, searchRegions } from '../services/api';

const loading = ref(true);
const biomarkers = ref([]);
const filters = reactive({
    category: '',
    region: '',
    stage: '',
    location: '',
    source: '',
    application: ''
});
const filterOptions = reactive({
    Category: [],
    Stage: [],
    Location: [],
    Source: [],
    Application: []
});
const filteredBiomarkers = ref([]);
const paginatedBiomarkers = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const chartRef = ref(null);
const router = useRouter();

// 获取生物标志物数据
async function fetchBiomarkers() {
    try {
        loading.value = true;
        const response = await getBiomarkers();
        biomarkers.value = response.data;
        applyFilters();
        renderChart();
    } catch (error) {
        console.error('Error fetching biomarkers:', error);
    } finally {
        loading.value = false;
    }
}

// 获取筛选选项
async function fetchFilterOptions() {
    try {
        const response = await getFilters();
        Object.assign(filterOptions, response.data);
    } catch (error) {
        console.error('Error fetching filter options:', error);
    }
}

// 筛选功能
function applyFilters() {
    filteredBiomarkers.value = biomarkers.value.filter(biomarker => {
        return (
            (filters.category === '' || biomarker.Category === filters.category) &&
            (filters.region === '' || (biomarker.Region && biomarker.Region.includes(filters.region))) &&
            (filters.stage === '' || biomarker.Stage === filters.stage) &&
            (filters.location === '' || biomarker.Location === filters.location) &&
            (filters.source === '' || biomarker.Source === filters.source) &&
            (filters.application === '' || biomarker.Application === filters.application)
        );
    });
    updatePaginatedBiomarkers();
    renderChart();
}

// 分页功能
function handlePageChange(page) {
    currentPage.value = page;
    updatePaginatedBiomarkers();
}

// 更新分页数据
function updatePaginatedBiomarkers() {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    paginatedBiomarkers.value = filteredBiomarkers.value.slice(start, end);
}

// 渲染图表
function renderChart() {
    const chart = echarts.init(chartRef.value);
    const option = {
        title: {
            text: 'Biomarker Statistics'
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['Proteins', 'Genes']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Biomarkers',
                type: 'bar',
                data: [
                    filteredBiomarkers.value.filter(b => b.Category === 'Protein').length,
                    filteredBiomarkers.value.filter(b => b.Category === 'Gene').length
                ]
            }
        ]
    };
    chart.setOption(option);
}

// 导出表格
function exportTable() {
    const ws = XLSX.utils.json_to_sheet(filteredBiomarkers.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Biomarkers');
    XLSX.writeFile(wb, 'biomarkers.xlsx');
}

// 行点击事件
function handleRowClick(row) {
    router.push({ name: 'BiomarkerDetails', params: { id: row.ID } });
}

// 获取区域建议
function fetchRegionSuggestions(query, cb) {
    searchRegions(query).then(response => {
        const suggestions = response.data.map(item => ({ value: item }));
        cb(suggestions);
    }).catch(error => {
        console.error('Error fetching region suggestions:', error);
    });
}

onMounted(() => {
    fetchBiomarkers();
    fetchFilterOptions();
});
</script>

<style scoped>
.el-aside {
    background-color: #f5f5f5;
    padding: 20px;
}

.el-header {
    background-color: #333;
    color: #fff;
}

.el-footer {
    background-color: #f5f5f5;
    padding: 20px;
}

.el-main {
    padding: 20px;
}

.pagination {
    margin-top: 20px;
    text-align: right;
}

.filter-menu {
    margin-bottom: 20px;
}
</style>
