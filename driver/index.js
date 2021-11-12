'use strict';

const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const sns = new AWS.SNS();

const consumer = Consumer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/141714479588/packages.fifo',
  handleMessage: (message) => {
    const payload = {
      Message: message,
      TopicArn: 'arn:aws:sns:us-east-2:141714479588:delivered',
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
  },
});

consumer.start();
