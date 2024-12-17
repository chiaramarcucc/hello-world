fetch('https://www.worldcubeassociation.org/api/v0/competitions')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Qui puoi manipolare i dati e visualizzarli
    });
