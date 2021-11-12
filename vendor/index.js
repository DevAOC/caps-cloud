'use strict';

const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const sns = new AWS.SNS();

const payload = {
  Message: {
    store: 'BLASHASHD',
    orderId: 'ordervvvv',
  },
  TopicArn: 'arn:aws:sns:us-east-2:141714479588:pickup.fifo',
};

sns
  .publish(payload)
  .promise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const consumer = Consumer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/141714479588/deliveries',
  handleMessage: (message) => {
    console.log('Package' + message + ' was delivered');
  },
});

consumer.start();
