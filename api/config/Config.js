"use strict";

class ApiConfig {
    constructor() {
        this.rootPath = undefined;
        this.conf = undefined;
    }

    config(__rootPath) {
        if (!this.rootPath && __rootPath) {
            this.rootPath = __rootPath;
        }

        this.conf = {
            pokeApiConfig: {
                baseUrl: process.env.POKE_BASE_URL,
                timeout: 3000
            },
            port: process.env.PORT
        }

        return this.conf;
    }
}


const apiConfig = new ApiConfig()
module.exports = __rootPath => {
    return apiConfig.config(__rootPath);
}