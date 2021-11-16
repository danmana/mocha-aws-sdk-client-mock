
const { ListBucketsCommand, S3Client } = require('@aws-sdk/client-s3');
const { mockClient } = require('aws-sdk-client-mock');
const { Service } = require('../src/service');
const assert = require('assert');

const mock = mockClient(S3Client);

describe('one', () => {
  /** @type Service */
  let service;

  beforeEach(() => {
    mock.reset();
    service = new Service();
  });

  it('should work', async () => {
    mock.on(ListBucketsCommand).resolves({});

    const result = await service.getBuckets();
    assert.deepEqual(result, {});
  });

  it('should fail', async () => {
    mock.on(ListBucketsCommand).rejects(new Error('err'));

    await assert.rejects(async () => {
      await service.getBuckets();
    })
  });

});