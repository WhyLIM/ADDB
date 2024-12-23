<template>
    <div>
        <div id="cy" style="width: 100%; height: 500px;"></div>

        <!-- Element-Plus Dialog -->
        <el-dialog v-model="dialogVisible" width="700">
            <!-- Define the header slot -->
            <template #header>
                <span style="font-weight: bold;">{{ proteinData.name }}: {{ proteinData.description }}</span>
            </template>
            <!-- Dialog content -->
            <div>
                <div>
                    <el-text line-clamp="10" style="text-align: justify;">{{ proteinData.comments }}</el-text>
                </div>
                <el-link type="primary" :href="proteinData.link" target="_blank">
                    View details for {{ proteinData.name }} on GeneCards
                </el-link>
                <br>
                <el-link type="warning" :href="proteinData.stringlink" target="_blank">{{ proteinData.info }}</el-link>
            </div>
            <template #footer>
                <el-button @click="dialogVisible = false">Close</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import cytoscape from 'cytoscape';
// import { ElMessageBox } from 'element-plus';

// Define API data URL
const dataurl = 'https://string-db.org/api/json/network?identifiers=TP53&required_score=400';
const uniprotApiBaseUrl = 'https://rest.uniprot.org/uniprotkb/search';

const cy = ref(null);
const dialogVisible = ref(false); // State for dialog visibility
const proteinData = ref({
    name: '',
    info: '',
    link: ''
}); // Reactive object to store protein data

// Parse data for Cytoscape.js
function parseDataToCytoscapeElements(data) {
    const nodes = new Set();
    const edges = [];

    data.forEach((interaction) => {
        nodes.add({
            data: {
                id: interaction.preferredName_A,
                name: interaction.preferredName_A,
                info: `STRING ID: ${interaction.stringId_A}`,
            },
        });
        nodes.add({
            data: {
                id: interaction.preferredName_B,
                name: interaction.preferredName_B,
                info: `STRING ID: ${interaction.stringId_B}`,
            },
        });

        edges.push({
            data: {
                id: `${interaction.preferredName_A}-${interaction.preferredName_B}`,
                source: interaction.preferredName_A,
                target: interaction.preferredName_B,
                interactionType: `Score: ${interaction.score}`,
            },
        });
    });

    return [...nodes, ...edges];
}

// Function to fetch data from UniProt API
async function fetchGeneDetails(geneName) {
    try {
        const queryUrl = `${uniprotApiBaseUrl}?query=gene:${geneName}+AND+organism_id:9606`;
        const response = await fetch(queryUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch UniProt data: ${response.statusText}`);
        }

        const data = await response.json();
        const result = data.results?.[0]; // Get the first result
        if (!result) return { description: 'No data available', comments: 'No data available' };

        // Extract required fields
        const description = result.proteinDescription?.recommendedName?.fullName?.value || 'No description available.';
        const comments = result.comments?.[0]?.texts?.[0]?.value || 'No comments available.';

        return { description, comments };
    } catch (error) {
        console.error('Error fetching gene details:', error);
        return { description: 'Error fetching data', comments: 'Error fetching data' };
    }
}

// onMounted lifecycle hook to initialize Cytoscape.js
onMounted(async () => {
    try {
        const response = await fetch(dataurl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const interactionData = await response.json();
        const elements = parseDataToCytoscapeElements(interactionData);

        cy.value = cytoscape({
            container: document.getElementById('cy'),
            elements,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        label: 'data(name)',
                    },
                },
                {
                    selector: 'edge',
                    style: {
                        width: 3,
                        'line-color': '#ccc',
                    },
                },
            ],
            layout: { name: 'cose' },
        });

        // Show dialog on node click
        cy.value.on('tap', 'node', async (event) => {
            const node = event.target;
            const geneName = node.data('name');

            // Fetch gene comments from UniProt
            const details = await fetchGeneDetails(geneName);

            // Update dialog content
            proteinData.value = {
                name: node.data('name'),
                description: details.description,
                comments: details.comments,
                info: node.data('info'),
                link: `https://www.genecards.org/cgi-bin/carddisp.pl?gene=${geneName}`,
                stringlink: `https://string-db.org/network/${node.data('info').split(': ')[1]}`,
            };
            dialogVisible.value = true; // Show dialog
        });

        // Hide dialog when tapping the background
        cy.value.on('tap', (event) => {
            if (event.target === cy.value) {
                dialogVisible.value = false;
            }
        });
    } catch (error) {
        console.error('Error loading or processing data:', error);
    }
});
</script>

