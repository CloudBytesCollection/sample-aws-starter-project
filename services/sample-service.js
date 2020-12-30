// Sample Service

// Imports
const handlerUtil = require('../libs/utils/handler-util');

module.exports.getHelloMessage = () => {
    // Placeholder for something awesome!
    return new Promise((resolve) => {
        resolve(handlerUtil.formatHandlerResponse(200, { response: 'Hello!' }));
    });
};
