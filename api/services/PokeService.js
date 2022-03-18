const PokeGateway = require("../gateway/PokerGateway");

class PokerService {
    constructor() {
        this.pokeGateway = new PokeGateway();
    }

    async getPokemonAbilities(pokemonName) {
        const response = await this.pokeGateway.getPokemonAbilities(pokemonName);
        
        const abilities = response && response.data && response.data.abilities.sort((a, b) => a.ability.name < b.ability.name ? -1 : a.ability.name > b.ability.name ? 1 : 0).map(item => item)

        if(!abilities)
            throw new Error("nenhuma habilidade encontrada para o pokemon informado!");

        return abilities;
    }
}

module.exports = PokerService;