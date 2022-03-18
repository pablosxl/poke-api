const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');


(async () => {
    require("dotenv").config();
    const config = require("./api/config/Config")(__dirname);
    
    server.use(cors());
    server.use(bodyParser.json());
    require('./api/routes/PokeRouter')(server);

    
    //Start API
    server.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)})
})();

  
