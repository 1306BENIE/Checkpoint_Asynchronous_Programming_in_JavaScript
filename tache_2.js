async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url).then(response => response.json()))
        );
        console.log('Réponses de toutes les requêtes parallèles :', responses);
    } catch (error) {
        console.error('Erreur lors des appels parallèles :', error.message);
    }
}