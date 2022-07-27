const AWS = require("aws-sdk")
const https = require('https')
let url = "https://www.antstack.io/hello"
const ses =new AWS.SES()



exports.handler = async function(event) {
  const params = {
    Destination:{
      ToAddresses : ["p.raj280499@gmail.com"],
    },
    Message:{
      Body:{
        Text: {Data:"Website Down"},
      },
      Subject :{
        Data:"Website Not Responidng"
      },
    },
      Source:"pratik.raj@antstack.io",
    }
  
  const promise = new Promise(function(resolve, reject) {
    https.get(url, (res) => {
       const responseWebsite = res.statusCode
        console.log(responseWebsite)
        
        if(responseWebsite == 200)
        {
          console.log("Everything's Working Fine")
          return {
              statusCode: 200,
              body: JSON.stringify("You are still going well"),
            }
        }
        else
        {
          console.log("Sending Mail")
         return ses.sendEmail(params).promise() 
        }
        
        
        
      }).on('error', (e) => {
        reject(Error(e))
      })
      
    })
    return promise
  //return promise
}
