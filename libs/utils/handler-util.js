// A utility that takes in an argument and adds necessary headers
// for AWS
'use strict';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, X-Api-Key, Authorization',
    'Access-Control-Allow-Credentials': 'true'
};

module.exports.formatHandlerResponse = (statusCode, payload) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(payload),
        headers: headers
    };
};
