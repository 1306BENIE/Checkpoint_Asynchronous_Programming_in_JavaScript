// Fonction utilitaire pour introduire un délai
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const iterateWithAsyncAwait = async(values) => {
    {
        for (const value of values) {
            await delay(1000);
            console.log(`Enregistrement de la valeur : ${value}`);
        }
    }
}

// Exemple d'utilisation
const data = [1, 2, 3, 4];
iterateWithAsyncAwait(data);


