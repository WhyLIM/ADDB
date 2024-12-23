<template>
    <iframe :src="docPath" class="docs-iframe"></iframe>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 动态计算文档路径
const docPath = computed(() => {
    const subPath = route.params.pathMatch || "";
    return `/about/${subPath}`;
});
</script>

<style scoped>
.docs-iframe {
    width: 100%;
    height: 100vh;
    border: none;
}
</style>
