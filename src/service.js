const { ListBucketsCommand, S3Client } = require('@aws-sdk/client-s3');

class Service {
  constructor() {
    this.client = new S3Client();
  }

  async getBuckets() {
    const result = await this.client.send(new ListBucketsCommand())
    return result;
  }
}

module.exports = { Service };