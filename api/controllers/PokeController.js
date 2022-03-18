const PokerService = require("../services/PokeService");

class PokerController {
    constructor() {
        this.pokerService = new PokerService();
    }

    async getPokemonAbilities(req, res, next) {
        try {        
            const pokemonName = req.params.name;
            const abilities = await this.pokerService.getPokemonAbilities(pokemonName);
            
            res.send(abilities);
            next(); 
        } catch (error) {
            res.status(404).send({
                stack: error.stack,
                message: error.message
            }); 
        }
    }
}

module.exports = PokerController;