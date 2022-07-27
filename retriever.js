'use strict';
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
module.exports.urlRetriever = async (event) => {

    let body;
    //let json = JSON.parse(event.queryStringParameters)
    /*return {
        statusCode:200,
        body:JSON.stringify({
          message: "Hi we Have recieved your JSON object",
          object : event.queryStringParameters.url,
        }),
      }*/
      const shorturl = event.queryStringParameters.url;

  try {
        //const {shorturl} = event['queryStringParameters'];
        
        let json = JSON.parse(event.queryStringParameters)
        
        body = dynamo.get({
            TableName: "URL-Shortner-2",
            Key: {
              shortId: shorturl,
            }
          }).promise();

  } catch (err) {
    //statusCode = 400;
    body = err.message;
    
  } 

  return {
    statusCode:200,
    body:JSON.stringify({
      message: "Hi we Have recieved your JSON object",
      input : body,
      shortUrl : shorturl,
    }),
  }


}