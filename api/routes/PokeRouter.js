const PokerController = require('../controllers/PokeController');

module.exports = (app) => {

app.get('/api/pokemons/:name', async (req, res, next) => await new PokerController().getPokemonAbilities(req, res, next)); 

}