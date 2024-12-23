<template>
    <!-- 定义一个容器，包含头部、主体和底部 -->
    <el-container class="app-container">
        <!-- 头部 -->
        <el-header class="header">
            <!-- 定义一个菜单，默认激活的菜单项为 activeIndex -->
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <!-- 菜单中的 logo -->
                <img src="/logo1.png" alt="Logo" style="height: 50px;" />
                <!-- 菜单项 1 -->
                <el-menu-item index="1">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <router-link to="/">Home</router-link>
                </el-menu-item>
                <!-- 菜单项 2 -->
                <el-menu-item index="2">
                    <el-icon>
                        <Grid />
                    </el-icon>
                    <router-link to="/biomarkers">Biomarkers</router-link>
                </el-menu-item>
                <!-- 菜单项 3 -->
                <el-menu-item index="3">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                    <router-link to="/about">About</router-link>
                </el-menu-item>
                <!-- 菜单项 4 -->
                <el-menu-item index="4">
                    <el-icon>
                        <Flag />
                    </el-icon>
                    <router-link to="/test">Test</router-link>
                </el-menu-item>
            </el-menu>
        </el-header>
        <!-- 主体 -->
        <el-main class="main-content">
            <!-- 路由视图 -->
            <router-view></router-view>
        </el-main>
        <!-- 底部 -->
        <!-- <el-footer class="footer">
            <p>&copy; 2024 Alzheimer's Disease Biomarker Database. All rights reserved.</p>
        </el-footer> -->
        <PageFooter :columns="footerColumns" />
    </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { HomeFilled, Grid, InfoFilled, Flag } from '@element-plus/icons-vue';
import PageFooter from './components/PageFooter.vue';

// 定义一个响应式变量，表示当前激活的菜单项
const activeIndex = ref('1');

const footerColumns = [
    {
        title: "About",
        type: "links",
        content: [
            { text: "Our Mission", href: "/about" },
            { text: "Our Team", href: "/about/team" },
            { text: "Careers", href: "/about/careers" },
        ],
    },
    {
        title: "Navigation",
        type: "links",
        content: [
            { text: "Home", href: "/" },
            { text: "Biomarkers", href: "/biomarkers" },
            { text: "Test", href: "/test" },
        ],
    },
    {
        title: "Contact",
        type: "text",
        content: [
            "Email: support@addb.com",
            "Phone: +1 (234) 567-890",
            "Twitter: @addb",
        ],
    },
];

// 处理菜单项选择事件
function handleSelect(key) {
    // 更新当前激活的菜单项
    activeIndex.value = key;
}
</script>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    color: #fff;
    display: flex;
    align-items: center;
}

.el-menu {
    flex-grow: 1;
    background-color: transparent;
}

.el-main {
    flex: 1;
    padding-top: 50px;
    /* Adjust based on header height */
    overflow-y: auto;
}

/* .footer {
    z-index: 1;
    text-align: center;
    background-color: #333;
    color: #fff;
} */

a {
    color: inherit;
    text-decoration: none;
}
</style>
