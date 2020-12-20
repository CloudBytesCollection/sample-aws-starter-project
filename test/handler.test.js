// Handler Test

// Imports
const handler = require('../handler');

test('correct message is returned from "hello" endpoint', () => {
    // The function returns a promise

    return handler.hello().then((result) => {
        // Assert that it actually says "Hello!"
        // with status code of 200
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).response).toBe('Hello!');
    });
});
