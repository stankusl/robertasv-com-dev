(function () {
    'use strict';

    // IBM CLOUD ENVIRONMENT VARIOUBLES ===========================================
    const dotenv = require('dotenv');
    dotenv.config();
    let IBMCloudEnv = require('ibm-cloud-env');
    IBMCloudEnv.init('/node-email-server_envvar.json');

    // INCLUDE EXPRESS ======================================
    const express = require('express');
    let app = express();
    const router = express.Router();

    const PORT = 8080;
    const HOST = '0.0.0.0';

    
    router.get('/',function(req,res){


        res.json({
            apiName: 'Robkes Servas',
            apiVersion: '0.0.1'
        });
        
    });

  

    app.use('/', router);
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
})();