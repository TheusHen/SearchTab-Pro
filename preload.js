const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getWeatherInfo: async () => {
        const ipInfo = await fetch('https://ipwho.is/').then(res => res.json());

        if (!ipInfo.success) {
            throw new Error('Erro ao obter localização.');
        }

        const { latitude, longitude, city } = ipInfo;

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weather = await fetch(weatherUrl).then(res => res.json());

        return {
            city,
            temperature: weather.current_weather.temperature,
            unit: weather.current_weather_units.temperature
        };
    },

    closeApp: () => ipcRenderer.send('close-app')
});
