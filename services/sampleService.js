// Sample Service

// Imports
const promisesUtil = require('../libs/utils/promisesUtil.js'); 

module.exports.getHelloMessage = () => {
    return new Promise(async resolve => {
        resolve(
            promisesUtil.formatPromisePayload(200, { response: "Hello!"})
        );
    });
};