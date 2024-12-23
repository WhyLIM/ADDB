<template>
    <el-container>
        <!-- 侧栏：锚点导航 -->
        <el-aside width="300px">
            <el-anchor>
                <!-- 为每个表格标题添加锚点链接 -->
                <el-anchor-link href="#basic-info" title="Basic Information" />
                <el-anchor-link href="#article-info" title="Article Information" />
                <el-anchor-link href="#experiment-info" title="Experimental and Sample Statistics" />
            </el-anchor>
        </el-aside>

        <el-container>
            <el-header>
                <div>
                    <!-- 标题 -->
                    <h1>{{ biomarker["Biomarker(abbr.)"] || "Loading..." }}</h1>

                    <!-- 加载和错误状态 -->
                    <div v-if="isLoading">Loading...</div>
                    <div v-if="error">{{ error }}</div>
                    <hr />
                </div>
            </el-header>

            <el-main>
                <!-- 基础信息表 -->
                <el-descriptions id="basic-info" class="margin-top" title="Basic Information" :column="1" size="large"
                    border>
                    <el-descriptions-item v-for="field in basicInfoFields" :key="field.key">
                        <template #label>
                            <div class="cell-item">
                                <el-icon :style="iconStyle">
                                    <user />
                                </el-icon>
                                {{ field.label }}
                            </div>
                        </template>
                        {{ biomarker[field.key] === 0 ? 0 : biomarker[field.key] || "N/A" }}
                    </el-descriptions-item>
                </el-descriptions>

                <!-- 文章信息表 -->
                <el-descriptions id="article-info" class="margin-top" title="Article Information" :column="1"
                    size="large" border>
                    <el-descriptions-item v-for="field in articleInfoFields" :key="field.key">
                        <template #label>
                            <div class="cell-item">
                                <el-icon :style="iconStyle">
                                    <user />
                                </el-icon>
                                {{ field.label }}
                            </div>
                        </template>
                        {{ biomarker[field.key] === 0 ? 0 : biomarker[field.key] || "N/A" }}
                    </el-descriptions-item>
                </el-descriptions>

                <!-- 实验与样本信息表 -->
                <el-descriptions id="experiment-info" class="margin-top" title="Experimental and Sample Statistics"
                    :column="1" size="large" border>
                    <el-descriptions-item v-for="field in experimentFields" :key="field.key">
                        <template #label>
                            <div class="cell-item">
                                <el-icon :style="iconStyle">
                                    <user />
                                </el-icon>
                                {{ field.label }}
                            </div>
                        </template>
                        {{ biomarker[field.key] === 0 ? 0 : biomarker[field.key] || "N/A" }}
                    </el-descriptions-item>
                </el-descriptions>
            </el-main>
        </el-container>
    </el-container>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getBiomarkerDetails } from '../services/api';

// 路由和状态
const route = useRoute();
const biomarker = ref([]); // 存储 biomarker 详情
const isLoading = ref(false); // 加载状态
const error = ref(null); // 错误信息

// 图标样式
const iconStyle = computed(() => ({
    marginRight: '8px',
}));

// 配置化字段
const basicInfoFields = [
    { label: 'ID', key: 'ID' },
    { label: 'Name', key: 'Biomarker(abbr.)' },
    { label: 'Category', key: 'Category' },
    { label: 'Application', key: 'Application' },
    { label: 'Discription', key: 'Discription' },
    { label: 'Detail', key: 'Detail' },
];

const articleInfoFields = [
    { label: 'PMID', key: 'PMID' },
    { label: 'Journal', key: 'Journal' },
    { label: 'Corresponding author', key: 'Corresponding author' },
    {
        label: "Corresponding author's unit", key: "Corresponding author's unit"
    },
    { label: 'Publication year', key: 'Publication year' },
];

const experimentFields = [
    { label: 'Experiment methods', key: 'Experiment methods' },
    { label: 'Statictics', key: 'Statictics' },
    { label: 'Region', key: 'Region' },
    { label: 'Race', key: 'Race' },
    { label: 'Samples', key: 'Samples' },
    { label: 'Age', key: 'Age' },
    { label: 'Gender(Male/Female)', key: 'Gender(m/f)' },
    { label: 'Source', key: 'Source' },
];


// 数据获取
onMounted(async () => {
    const biomarkerId = route.params.id;
    isLoading.value = true;
    try {
        const response = await getBiomarkerDetails(biomarkerId);
        biomarker.value = response.data;
        // console.log(biomarker.value);
        // console.log(Object.keys(biomarker.value));
    } catch (err) {
        error.value = 'Failed to fetch biomarker details';
    } finally {
        isLoading.value = false;
    }
});
</script>

<style scoped>
.el-aside {
    /* background-color: #f5f5f5; */
    padding: 20px;
    height: 100vh;
    overflow: auto;
}

.el-anchor {
    position: sticky;
    top: 20px;
}

.el-header {
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
}

.margin-top {
    margin-top: 20px;
}

.cell-item {
    display: flex;
    align-items: center;
}
</style>
