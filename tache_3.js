const concurrentRequests = async () => {
    try {
        const urls = ['url_api_1', 'url_api_2'];

        const responses = await Promise.all(urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erreur HTTP ${response.status} pour ${url}`);
            return response.json();
        }));

        console.log('Résultat de la première requête :', responses[0]);
        console.log('Résultat de la deuxième requête :', responses[1]);
    } catch (error) {
        console.error('Erreur lors des requêtes simultanées :', error.message);
    }
};