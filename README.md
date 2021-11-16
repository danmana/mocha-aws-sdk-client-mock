# mocha-aws-sdk-client-mock
Demo of errors when running multiple mocha tests with aws-sdk-client-mock

`npm run mocha -- tests/one*.js` works

`npm run mocha -- tests/two*.js` works

`npm run mocha -- tests/*Test.js` ⚠️ does not work, suite one fails 

`npm run mocha -- tests/*Test.js --parallel` works
