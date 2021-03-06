'use strict'

const axios = require('axios')

class HttpClientBuilder {

    constructor() {}

    buildClient(options) {
        configDefaultOptions(options);
        const client = axios.create(options);
        client.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return error.response;
            }
        );

        return client;
    }

}

function configDefaultOptions(options) {
    try {
        if (options.timeout === undefined) {
            options.timeout = 30000;
        }
        if (options.headers === undefined) {
            options.headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
        }
    } catch (error) {
    }
}

module.exports = HttpClientBuilder