# Sample AWS Starter Project
![Build](https://github.com/EdyVision/sample-aws-starter-project/workflows/Test%20and%20Deploy%20to%20Staging/badge.svg)

A simple starter project with sample tests, CI/CD configuration for GitHub Actions and Travis CI, and some security configurations to lock down endpoints.

This repository was written as part of an example for the book <em>Building Node.js serverless apps on AWS: A Brief Guide on Where to Start</em>.

## Setup
Have serverless installed locally and on your CI/CD pipeline:

```sh
npm install -g serverless
```

Make sure that you have your AWS Key and Secret in your env vars or bash profile:

```bash
export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID"
export AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"
```


## Deployment
To deploy to AWS locally, make sure you have your AWS key and secret in your bash profile and execute the following:

```sh
sls deploy -v --stage <dev, test, staging, production, etc>
```

## Usage

To execute locally, run the following command (<strong>npm install serverless -g</strong> is required):

```sh
sls offline --noAuth
```

or

```sh
npm start
```

If running locally, the beginning of your url will be http://localhost:3000

To hit the hello world endpoint provided in this example, submit a GET request against the URL http://localhost:3000/dev/sample/path/hello. The response will return a 200 HTTP status with the following body:

```json
{
    "response": "Hello!"
}
```
