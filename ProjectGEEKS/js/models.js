document.addEventListener('DOMContentLoaded', () => {
    const modelsList = document.getElementById('models-list');
    async function fetchModels() {
        try {
            const response = await fetch('../json/models.json');
            const data = await response.json();
            displayModels(data.models);
        } catch (error) {
            console.error('Error fetching models:', error);
        }
    }
    function displayModels(models) {
        models.forEach(model => {
            const modelCard = document.createElement('div');
            modelCard.classList.add('model-card');

            modelCard.innerHTML = `
                <img src="${model.image}" alt="${model.name}">
                <h2>${model.name}</h2>
                <p>${model.description}</p>
            `;

            modelsList.appendChild(modelCard);
        });
    }

    fetchModels();
});
