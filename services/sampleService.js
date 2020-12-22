// Sample Service

// Imports
const promisesUtil = require('../libs/utils/promisesUtil');

module.exports.getHelloMessage = () => {
    return new Promise((resolve) => {
        resolve(promisesUtil.formatPromisePayload(200, { response: 'Hello!' }));
    });
};
