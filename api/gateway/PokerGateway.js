const HttpClientBuilder = require("../lib/HttpClientBuilder");

const config =  require("../config/Config")();
class PokeGateway {
    constructor() {
        this.pokemonServer = {
            baseUrl:  config.pokeApiConfig.baseUrl,
            timeout: config.pokeApiConfig.timeout,
        }
        this.client = (new HttpClientBuilder()).buildClient(this.pokemonServer);
    }

    get pokemonAbilitiesPath() {
        return this.getPath('/pokemon/:name');
    }

    getPath(endpoint) {
        return `${this.pokemonServer.baseUrl}${endpoint}`
    }

    async getPokemonAbilities(pokemonName) {
        const response = await this.client.get(this.pokemonAbilitiesPath.replace(":name", pokemonName));

        if(response && response.status != 200)
            throw new Error(response.message || 'Pokemon não encontrado!');

        return response
    }
}


module.exports = PokeGateway