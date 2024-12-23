<template>
    <el-container>
        <!-- 侧栏 -->
        <el-aside width="335px">
            <el-tabs type="border-card">
                <el-tab-pane label="Search">
                    <h3>Search in ADDB</h3>
                    <el-select-v2 v-model="value" multiple filterable remote
                        :remote-method="remoteMethod" clearable :options="options" :loading="loading"
                        placeholder="Search by keyword" />
                </el-tab-pane>
                <el-tab-pane label="Upload">
                    <h3>Upload gene list</h3>
                    <el-upload class="upload-demo" drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                txt/csv files with a size less than 500kb
                            </div>
                        </template>
                    </el-upload>
                </el-tab-pane>
            </el-tabs>
            <h3>Input manually</h3>
            <el-input v-model="textarea" :rows="10" type="textarea" placeholder="Please input" />
            <h3>Score Threshold</h3>
            <div class="slider-score-threshold">
                <el-slider v-model="value_score" max="1000" show-input size="small" />
            </div>
            <h3>Network Flavor</h3>
            <el-select v-model="value_flavor" placeholder="Select">
                <el-option v-for="item in options_flavor" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <h3>Network Type</h3>
            <el-select v-model="value_type" placeholder="Select">
                <el-option v-for="item in options_type" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <h3>Hide Disconnected Nodes</h3>
            <el-select v-model="value_hide" placeholder="Select">
                <el-option v-for="item in options_hide" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <div class="button-container">
                <el-button type="info" @click="onClear">Clear</el-button>
                <el-button type="primary" @click="onSubmit">Submit</el-button>
            </div>

            <!-- <el-form :model="filters" label-width="80px"></el-form> -->
        </el-aside>

        <!-- 主体内容 -->
        <el-container>
            <el-main>
                <CytoscapeGraph />
                <!-- 数据表格 -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import CytoscapeGraph from '../components/CytoscapeGraph.vue';
import { ref } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';

const states = [
    'Alabama',
    'Alaska',
    'Arizona'
];
const list = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` };
});

const value = ref([]);
const options = ref([]);
const loading = ref(false);

const remoteMethod = (query) => {
    if (query !== '') {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            options.value = list.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase());
            });
        }, 200);
    } else {
        options.value = [];
    }
};

const textarea = ref('')

const value_score = ref(400)


const value_flavor = ref('confidence')
const value_type = ref('functional')
const value_hide = ref('false')
const options_flavor = [
    {
        value: 'confidence',
        label: 'confidence'
    },
    {
        value: 'evidence',
        label: 'evidence'
    },
    {
        value: 'actions',
        label: 'actions'
    }
];

const options_type = [
    {
        value: 'functional',
        label: 'functional'
    },
    {
        value: 'physical',
        label: 'physical'
    }
];

const options_hide = [
    {
        value: 'true',
        label: 'true'
    },
    {
        value: 'false',
        label: 'false'
    }
];


const onClear = () => {
    console.log('clear!')
}
const onSubmit = () => {
    console.log('submit!')
}

</script>

<style scoped>
.el-aside {
    background-color: #f5f5f5;
    padding: 20px;
}

.el-aside h3 {
    margin: 10px 0;
}

.el-main {
    padding: 20px;
}

.button-container {
    margin-top: 20px;
    text-align: center;
}

</style>

