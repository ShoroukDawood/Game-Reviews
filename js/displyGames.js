export let gameContainer = document.querySelector('#gameContainer');

export async function getGamesByCategory(category) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '91f2373996msh2df5ae81bf76612p196304jsnac607b1fc469',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const games = await response.json();
        console.log('Fetched Games:', games); 
        return games;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export function displayGames(games) {
    let cartona = '';
    for (let i = 0; i < games.length; i++) {
        cartona += `
            <div id="card" class="card g-3 col-md-3">
                <img
                    src="${games[i].thumbnail}"
                    class="card-img-top"
                    alt="${games[i].title}"
                />
                <div class="card-body">
                    <h5 class="card-title">${games[i].title}</h5>
                    <p class="card-text">${games[i].short_description}</p>
                    <a href="${games[i].game_url}" class="btn btn-primary" target="_blank">Play Now</a>
                </div>
            </div>
        `;
    }
    gameContainer.innerHTML = cartona;
    showGameDetails();
}
