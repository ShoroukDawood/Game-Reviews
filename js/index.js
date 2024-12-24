// import { getGamesByCategory } from './displyGames.js';
import { fetchAndDisplayGames} from './details.js';
import { navLinks } from './details.js';

fetchAndDisplayGames('mmorpg');

for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];
  link.addEventListener('click', (e) => {
    e.preventDefault();
      fetchAndDisplayGames(e.target.id);
       displayGames(games)
  });
}
