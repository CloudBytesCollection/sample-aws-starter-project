// Handler Test

// Imports
const handler = require('../handler');

test('correct message is returned from "hello" endpoint', async () => {
    // The function returns a promise, it'll
    // need to be treated as such here.
    let result = {};

    await handler.hello()
        .then(response => {result = response})
        .catch(error => {result = error});

    // Assert that it actually says "Hello!"
    // with status code of 200
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).response).toBe("Hello!");
});