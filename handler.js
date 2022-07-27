'use strict';
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
module.exports.urlShortner = async (event) => {
  
  //let statusCode = 200;
  if(event.httpMethod === "POST" && event.body)
  {
    let json = JSON.parse(event.body)
    /*return {
      statusCode:200,
      body:JSON.stringify({
        message: "Hi we Have recieved your JSON object",
        object : json,
      }),
    }*/
  }
  //let json = JSON.parse(event.body)
  let Body;

  try {
        
        const longURL = json;
        //console.log({event})
        //console.log ({longURL})
        let shortURL = Math.random().toString(32).substring(6);
        //let shortURL = `https://${randomStr}/`;
        const params = {
          TableName: "URL-Shortner-2",
            Item: {
              shortId: shortURL,
              longURL: longURL,
            }
        }

        await dynamo.put(params).promise();
          Body = "https://zt65vud38g.execute-api.us-east-1.amazonaws.com/dev/get-url?shortURL="+shortURL;

  } catch (err) {
    //statusCode = 400;
    Body = err.message;
  } 

  return {
    statusCode:200,
    body:JSON.stringify({
      message: "Hi we Have recieved your JSON object",
      object : Body,
    }),
  }
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

