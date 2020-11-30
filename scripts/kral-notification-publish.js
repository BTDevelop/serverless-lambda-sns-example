let AWS = require("aws-sdk"); // must be npm installed to use
let sns = new AWS.SNS({
  endpoint: "http://127.0.0.1:4002",
  region: "eu-central-1",
});
sns.publish({
  Message: "hello!",
  MessageStructure: "json",
  TopicArn: "arn:aws:sns:us-east-1:123456789012:test-topic",
}, () => {
  console.log("ping");
});