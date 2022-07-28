# AWS Induction Assignment.
Contains Code related to AWS and Serverless Framework for the Anstack Induction Assignments.

1. Url Shortner-:
          Takes a long URL as the input and returns the Short URL corresponding to the Long Url and also updates the DynamoDb Table with the Short Url and Long Url data in Key-Value Pair.

2. Url Retriever - :
          Takes a short URL as the input and returns the Long URL fetched form the DynamoDb Table with the Short Url and Long Url data in Key-Value Pair.
          
 
2. Image Uploader-:
          Takes a Base-64 Encoded Image File String Data and Uploads it to the S3 Bucket which can be fetched with the API.
          
3. Website Down Notification -:
          Checks for the status of a "Website" at regular intervals and sends out an email notification if the website is down.
          
          
Instructions to Call API for the above created Lambda Functions.

1. URL Shortner - :
          1.API - "https://zt65vud38g.execute-api.us-east-1.amazonaws.com/dev/shortner-id"
          2.Method - "POST"
          3.JSON Object to be passed as to the above API
          4.Eg : {
                    "longURL":"https://www.youtube.com/watch?v=0gNz-MmfdQg"
                  }
2. URL Retriever - :
            1.API - "https://zt65vud38g.execute-api.us-east-1.amazonaws.com/dev/get-url?shortId={short url}"
            2.Method - "GET"
            3.Parameter to be passed along with the API.

3. Image Uploader - :
            1.API - "https://s4wokhevx4.execute-api.us-east-1.amazonaws.com/dev/image" 
            2.Method - "POST"
            3.JSON Object with Base 64 Encoded String to be passed as to the above API.

4. Website Down Notification - :
            1.Sender Email - "p.raj280499@gmail.com"
            2.Reciever Email - "pratikraj276@gmail.com"
            3.Event Bridge (Disabled as of now) - "website-down".
        
