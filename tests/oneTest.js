
const { ListBucketsCommand, S3Client } = require('@aws-sdk/client-s3');
const { mockClient } = require('aws-sdk-client-mock');
const assert = require('assert');

const mock = mockClient(S3Client);

describe('one', () => {
  let client;

  beforeEach(() => {
    mock.reset();
    client = new S3Client();
  });

  it('should work', async () => {
    mock.on(ListBucketsCommand).resolves({});

    const result = await client.send(new ListBucketsCommand());

    assert.deepEqual(result, {});
  });

});