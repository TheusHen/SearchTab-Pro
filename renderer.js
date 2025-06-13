
const searchMap = {
    google: 'https://www.google.com/search?q=',
    yahoo: 'https://search.yahoo.com/search?p=',
    bing: 'https://www.bing.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?q=',
    yandex: 'https://yandex.com/search/?text=',
    github: 'https://github.com/search?q='
};

const colorMap = {
    google: '#4285F4',
    yahoo: '#6001D2',
    bing: '#008373',
    duckduckgo: '#DE5833',
    yandex: '#FF0000',
    github: '#000000'
};

const tempDisplay = document.getElementById('tempDisplay');
const searchEngine = document.getElementById('searchEngine');
const input = document.getElementById('queryInput');
const button = document.getElementById('searchBtn');
const engineIcon = document.getElementById('engineIcon');
const appContainer = document.getElementById('app');
const closeBtn = document.getElementById('closeBtn');

async function updateTemperature() {
    try {
        const data = await window.api.getWeatherInfo();
        tempDisplay.textContent = `${data.temperature}°${data.unit} em ${data.city}`;
    } catch (e) {
        tempDisplay.textContent = 'Erro ao carregar temperatura.';
        console.error(e);
    }
}

function updateBorderColor(engine) {
    const color = colorMap[engine] || '#999';
    appContainer.style.setProperty('--dynamic-shadow', color);
}

function updateEngineIcon() {
    const selected = searchEngine.options[searchEngine.selectedIndex];
    const icon = selected.getAttribute('data-icon');
    engineIcon.src = `assets/icons/${icon}`;
}

button.addEventListener('click', () => {
    const engine = searchEngine.value;
    const query = encodeURIComponent(input.value);
    const url = searchMap[engine] + query;
    window.open(url);
});

searchEngine.addEventListener('change', () => {
    updateBorderColor(searchEngine.value);
    updateEngineIcon();
});

closeBtn.addEventListener('click', () => {
    window.close();
});

updateTemperature();
updateBorderColor(searchEngine.value);
updateEngineIcon();
