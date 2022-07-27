const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;

  try {
        //const {shorturl} = event['queryStringParameters'];
        const {shorturl} = event;

        body = await dynamo
          .get({
            TableName: "URL-Shortner-2",
            Key: {
              shortId: shorturl
            }
          })
          
          .promise();

  } catch (err) {
    //statusCode = 400;
    body = err.message;
    
  } 

  return {
    //"statusCode": statusCode,
    "location": body["Item"]["longURL"],
  };
};

