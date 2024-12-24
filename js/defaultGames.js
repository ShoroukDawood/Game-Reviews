import { getGamesByCategory } from './displyGames.js';
import { displayGames } from './displyGames.js'; 

const defaultCategory = 'mmorpg';

export async function showDefault() {
    const games = await getGamesByCategory(defaultCategory); 
    displayGames(games); 
}
