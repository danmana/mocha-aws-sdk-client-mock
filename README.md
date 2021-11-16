# mocha-aws-sdk-client-mock
Demo of errors when running multiple mocha tests with aws-sdk-client-mock

`npm run mocha -- tests/one*.js` works

`npm run mocha -- tests/two*.js` works

`npm run mocha -- tests/*.js` ⚠️ does not work, suite one fails

`npm run mocha -- tests/*.js --parallel` works
