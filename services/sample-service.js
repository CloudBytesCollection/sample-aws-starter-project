// Sample Service

// Imports
const handlerUtil = require('../libs/utils/handler-util');

module.exports.getHelloMessage = () => {
    return new Promise((resolve) => {
        resolve(handlerUtil.formatHandlerResponse(200, { response: 'Hello!' }));
    });
};
