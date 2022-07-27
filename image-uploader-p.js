const AWS = require('aws-sdk');
const https = require('https');
//*/ get reference to S3 client 
var s3 = new AWS.S3();
//const fetch = require('node-fetch');

exports.handler = (event, context,callback) => {
            /*const imageURL = 'https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5wrqLlof5AhU80HMBHTElAq0Q_AUoAXoECAIQAw&biw=1920&bih=1001&dpr=1#imgrc=Bx81dUgHmqLhzM.jpg'
            const res = fetch(imageURL)
            const decodedImage = res.buffer()
            console.log(decodedImage)*/
            let encodedImage = event.body;
            //console.log(encodedImage)
            let decodedImage = Buffer.from(encodedImage, 'base64');
            //console.log(decodedImage)
            var filePath = "pictures/" + event.name+ ".jpg";
            var params = {
            "Body": decodedImage,
            "Bucket": "image-upload-pr",
            "Key": filePath  
        };
            const uploads=s3.upload(params, function(err, data){
            if(err) {
                console.log(err)
            } else {
                console.log("success")
            let response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
                },
        "body": (data),
        "isBase64Encoded": false
    };
    const s3_url=(response.body.Location)
    callback (null,s3_url)
    
           
    }
    });
    
    
};
