<template>
    <div>
        <div id="cy" style="width: 600px; height: 400px;"></div>
        <div id="info-popup"
            style="position: absolute; display: none; background: #fff; border: 1px solid #ccc; padding: 10px;">
            <strong id="protein-name"></strong>
            <p id="protein-info"></p>
            <a id="protein-link" href="#" target="_blank" style="color: blue; text-decoration: underline;">View on
                GeneCards</a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import cytoscape from 'cytoscape';

const cy = ref(null);

function showInfoPopup(data, event) {
    const popup = document.getElementById('info-popup');
    const nameElem = document.getElementById('protein-name');
    const infoElem = document.getElementById('protein-info');
    const linkElem = document.getElementById('protein-link');

    // Populate the popup with data
    nameElem.textContent = data.name;
    infoElem.textContent = data.info;

    // Generate the GeneCards link
    linkElem.href = `https://www.genecards.org/cgi-bin/carddisp.pl?gene=${data.id}`;
    linkElem.textContent = `View details for ${data.id} on GeneCards`;

    // Position the popup near the mouse click
    popup.style.left = `${event.originalEvent.pageX}px`;
    popup.style.top = `${event.originalEvent.pageY}px`;

    // Show the popup
    popup.style.display = 'block';
}

onMounted(() => {
    cy.value = cytoscape({
        container: document.getElementById('cy'),
        elements: [
            { data: { id: 'TP53', name: 'TP53', info: 'Tumor Protein p53' } },
            { data: { id: 'BRCA1', name: 'BRCA1', info: 'Breast Cancer Type 1 Susceptibility Protein' } },
            { data: { id: 'TP53-BRCA1', source: 'TP53', target: 'BRCA1' } },
        ],
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
        layout: { name: 'grid' },
    });

    cy.value.on('tap', 'node', (event) => {
        const node = event.target; // Get the clicked node
        showInfoPopup(node.data(), event);
    });

    cy.value.on('tap', (event) => {
        if (event.target === cy.value) {
            document.getElementById('info-popup').style.display = 'none';
        }
    });
});
</script>
