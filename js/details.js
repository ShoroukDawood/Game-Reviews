import { getGamesByCategory } from './displyGames.js';

export const gameContainer = document.querySelector('#gameContainer');
export const detailsSection = document.querySelector('#detailsSection');
export const closeDetailsButton = document.querySelector('#closeDetails');
export const navLinks = document.querySelectorAll('.nav-link');

export const gameTitle = document.querySelector('#gameTitle');
export const gameCategory = document.querySelector('#gameCategory');
export const gamePlatform = document.querySelector('#gamePlatform');
export const gameStatus = document.querySelector('#gameStatus');
export const gameDescription = document.querySelector('#gameDescription');
export const gameImage = document.querySelector('#gameImage');
export const playNow = document.querySelector('#playNow');

export function showGameDetails(game) {
  gameTitle.textContent = game.title;
  gameCategory.textContent = game.genre;
  gamePlatform.textContent = game.platform;
  gameStatus.textContent = game.status;
  gameDescription.textContent = game.short_description;
  gameImage.src = game.thumbnail;
  playNow.href = game.game_url;

  detailsSection.classList.remove('d-none'); 
}

export async function fetchAndDisplayGames(category) {
  const games = await getGamesByCategory(category);
  gameContainer.innerHTML = ''; 

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const gameCard = document.createElement('div');
    gameCard.classList.add('card', 'col-md-3');
    gameCard.innerHTML = `
      <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}" />
      <div class="card-body">
        <h5 class="card-title">${game.title}</h5>
        <p class="card-text">${game.short_description}</p>
        <button class="btn btn-primary">View Details</button>
      </div>
    `;
      gameCard.querySelector('button').addEventListener('click', () =>showGameDetails(game));
    gameContainer.appendChild(gameCard);
  }
}
closeDetailsButton.addEventListener('click', () => {
  detailsSection.classList.add('d-none');
});
