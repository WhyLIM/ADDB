<template>
    <el-footer class="footer">
        <div class="footer-container">
            <!-- 静态列 -->
            <div class="footer-column">
                <img src="/suda.png" alt="Organization Logo" class="footer-logo" />
                <img src="/gdph.png" alt="Organization Logo" class="footer-logo" />
                <!-- <p>Address: No. 106, Zhongshan 2nd Road, Guangzhou</p> -->
                <p style="margin-left: 20px;">&copy; 2024-{{ new Date().getFullYear() }} ADDB.</p>
                <p style="margin-left: 20px;"> ALL RIGHTS RESERVED</p>
            </div>
            <!-- 动态生成列 -->
            <div v-for="column in props.columns" :key="column.title" class="footer-column">
                <!-- 动态渲染标题 -->
                <h3 v-if="column.title">{{ column.title }}</h3>

                <!-- 动态渲染内容 -->
                <template v-if="column.type === 'text'">
                    <p v-for="(text, idx) in column.content" :key="idx">{{ text }}</p>
                </template>

                <template v-else-if="column.type === 'links'">
                    <ul>
                        <li v-for="(link, idx) in column.content" :key="idx">
                            <a :href="link.href" :target="link.target || '_self'">{{ link.text }}</a>
                        </li>
                    </ul>
                </template>

                <template v-else-if="column.type === 'image'">
                    <img :src="column.content.src" :alt="column.content.alt" class="footer-logo" />
                </template>
            </div>
        </div>
    </el-footer>
</template>

<script setup>
// import { defineProps } from "vue";

// 定义列的默认类型
const props = defineProps({
    columns: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    height: auto;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-column {
    flex: 1;
    min-width: 200px;
    margin: 0 20px;
    /* text-align: center; */
}

.footer-column h3 {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
    color: #f1f1f1;
}

.footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column ul li a {
    color: #ddd;
    text-decoration: none;
}

.footer-column ul li a:hover {
    text-decoration: underline;
}

.footer-logo {
    /* height: 55px; */
    width: 180px;
    /* margin-bottom: 10px; */
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        text-align: center;
    }

    .footer-column {
        margin-bottom: 30px;
    }
}
</style>
