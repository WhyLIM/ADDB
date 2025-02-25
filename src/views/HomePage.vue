<template>
    <div>
        <!-- 背景图 -->
        <div class="hero">
            <div class="hero-content">
                <h1>Alzheimer's Disease Biomarker Database</h1>
                <p>Your source for Alzheimer's disease biomarker information</p>
                <el-input placeholder="Search for biomarkers" v-model="searchQuery" @input="searchBiomarkers"
                    :prefix-icon="Search" class="hero-search">
                </el-input>
            </div>
        </div>
        <!-- 数据统计 -->
        <div class="statistics">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-statistic title="Biomarkers" :value="1234"></el-statistic>
                </el-col>
                <el-col :span="6">
                    <el-statistic title="Genes" :value="567"></el-statistic>
                </el-col>
                <el-col :span="6">
                    <el-statistic title="Proteins" :value="890"></el-statistic>
                </el-col>
                <el-col :span="6">
                    <el-statistic title="Publications" :value="345"></el-statistic>
                </el-col>
            </el-row>
        </div>
        <!-- 简介 -->
        <div class="introduction">
            <h2>About the Database</h2>
            <p>
                The Alzheimer's Disease Biomarker Database is a comprehensive resource for information on biomarkers
                related to Alzheimer's disease. It provides detailed data on a wide range of biomarkers, including their
                associated genes and proteins, as well as related publications.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'

const searchQuery = ref('');

function searchBiomarkers() {
    console.log('Searching for:', searchQuery.value);
    // Add search functionality here
}
</script>

<style scoped>
.hero {
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center;
    padding: 210px 0;
    text-align: center;
    color: #fff;
}

.hero-content {
    max-width: 600px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 30px;
    margin: 0 0 20px;
}

.hero p {
    font-size: 18px;
    margin: 0 0 20px;
}

.hero-search {
    width: 100%;
}

.statistics {
    padding: 50px 0;
    background-color: #f5f5f5;
}

.el-col {
    text-align: center;
}

.introduction {
    padding: 100px 0;
    text-align: center;
}

.introduction h2 {
    font-size: 32px;
    margin-bottom: 20px;
}

.introduction p {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
}
</style>
