let AWS = require('aws-sdk');

const queue = new AWS.SQS({
  endpoint: 'http://localhost:9324',
  accessKeyId: 'admin', // it does not matter
  secretAccessKey: 'pwd', // it does not matter
  region: 'us-east-1', // it does not matter
});

(async () => {
  const queues = await queue.listQueues().promise();
  console.log(queues);
})();