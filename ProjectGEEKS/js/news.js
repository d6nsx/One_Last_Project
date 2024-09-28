document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');
    async function fetchNews() {
        try {
            const response = await fetch('../json/news.json');
            const data = await response.json();
            displayNews(data.news);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    function displayNews(news) {
        news.forEach(item => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');

            newsCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p><strong>Date:</strong> ${item.date}</p>
                <p>${item.description}</p>
            `;

            newsList.appendChild(newsCard);
        });
    }

    fetchNews();
});
