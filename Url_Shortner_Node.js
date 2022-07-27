const AWS = require("aws-sdk");
/*const awsConfig = {
    "region" : "us-east-1",
    "endpoint" : "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId" : "AKIA57GLKGCHYPXP2AFN",
    "secretAccessKey":"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",

}*/

//AWS.config.update(awsConfig);


const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  //let statusCode = 200;

  try {
        const {longURL} = event;
        console.log({event})
        console.log ({longURL})
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
          body = "https://zt65vud38g.execute-api.us-east-1.amazonaws.com/dev/get-url?shortURL="+shortURL;

  } catch (err) {
    //statusCode = 400;
    body = err.message;
  } 

  return {
    //statusCode,
    "url" : body,
  };
};
