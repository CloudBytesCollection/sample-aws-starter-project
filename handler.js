// Handler
'use strict';

// Imports
const sampleService = require('./services/sample-service');

// The following assumes use of the LAMBDA-PROXY integration
module.exports.hello = async (event) => {
    return sampleService.getHelloMessage(event);
};
