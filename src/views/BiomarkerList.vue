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
            </el-form>
        </el-aside>

        <!-- 主体内容 -->
        <el-container>
            <el-main>
                <!-- 数据表格 -->
                <el-table v-loading="loading" :data="paginatedBiomarkers" stripe style="width: 100%">
                    <el-table-column sortable="true" prop="ID" label="ID"></el-table-column>
                    <el-table-column sortable="true" prop="Biomarker(abbr.)" label="Biomarker"></el-table-column>
                    <el-table-column sortable="true" prop="Category" label="Category"></el-table-column>
                    <el-table-column sortable="true" prop="Application" label="Application"></el-table-column>
                    <!-- <el-table-column sortable="true" prop="PMID" label="PMID"></el-table-column> -->
                    <el-table-column sortable="true" prop="PMID" label="PMID">
                        <template #default="scope">
                            <a :href="`https://pubmed.ncbi.nlm.nih.gov/${scope.row.PMID}/`" target="_blank"
                                style="color: #20558a;font-weight: bold;">
                                <el-icon>
                                    <Link />
                                </el-icon>
                                {{ scope.row.PMID }}
                            </a>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background @current-change="handlePageChange" @size-change="handleSizeChange"
                    :current-page="currentPage" :page-size="pageSize" :page-sizes="[20, 50, 100, 150, 200]"
                    layout="total, sizes, prev, pager, next, jumper" :total="filteredBiomarkers.length"
                    class="pagination" />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { Filter, Link } from '@element-plus/icons-vue';
import { getBiomarkers, getFilters } from '../services/api';

const loading = ref(true);
const biomarkers = ref([]);
const filters = reactive({
    category: '',
    source: '',
    application: ''
});
const filterOptions = reactive({
    Category: [],
    Source: [],
    Application: []
});
const filteredBiomarkers = ref([]);
const paginatedBiomarkers = ref([]);
const currentPage = ref(1);
const pageSize = ref(20);


// 请求所有数据
async function fetchAllBiomarkers() {
    try {
        loading.value = true;
        const response = await getBiomarkers({ limit: 10000 }); // 假设获取所有数据
        biomarkers.value = response.data;
        applyFilters();
    } catch (error) {
        console.error('Error fetching biomarkers:', error);
    } finally {
        loading.value = false;
    }
}

// 筛选功能
function applyFilters() {
    console.log('Applying filters...');  // 添加调试信息
    console.log('Current Filters:', filters);  // 检查当前筛选条件
    filteredBiomarkers.value = biomarkers.value.filter(biomarker => {
        return (
            (filters.category === '' || biomarker.Category === filters.category) &&
            (filters.source === '' || biomarker.Source === filters.source) &&
            (filters.application === '' || biomarker.Application === filters.application)
        );
    });

    console.log('Filtered Biomarkers:', filteredBiomarkers.value);  // 检查筛选后的数据
    updatePaginatedBiomarkers();
}

// 获取筛选选项
async function fetchFilterOptions() {
    try {
        console.log("Calling /biomarkers/filters...");
        const response = await getFilters();
        console.log("Filter Options API Response:", response.data);

        Object.assign(filterOptions, response.data);
    } catch (error) {
        console.error('Error fetching filter options:', error);
    }
}


// 分页功能
function handlePageChange(page) {
    currentPage.value = page;
    updatePaginatedBiomarkers();
}

// 处理分页大小更改
function handleSizeChange(size) {
    pageSize.value = size; // 更新 pageSize
    currentPage.value = 1; // 重置为第一页
    updatePaginatedBiomarkers(); // 重新计算分页数据
}

// 更新分页数据
function updatePaginatedBiomarkers() {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    paginatedBiomarkers.value = filteredBiomarkers.value.slice(start, end);
}

onMounted(() => {
    fetchAllBiomarkers();
    fetchFilterOptions();
});
</script>

<style scoped>
.el-aside {
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
