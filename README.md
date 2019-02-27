# TestAPI

I have added mysql databse script in file named 'dbscript.sql'.
Please install node.js dependencies(npm install) to run node js application.
I have used chai with mocha to write unit test cases. To run unit tests(Application should be running) => npm test


Please find below details for API. I have used postman tool to test API.
1. Create user API: POST	http://localhost:3000/user
POST /user HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
access-token: YWRtaW46YWRtaW4=
cache-control: no-cache
Postman-Token: b0b49f0c-b69a-4ea0-a2a5-907f950ecce7
name=Balajimname=Nlname=Khadakegender=Maleaddress1=Sector+6address2=Spine+roadcity=Punecountry=Indiaemail=abcds%40gmail.comundefined=undefined


2. Get user details: GET	http://localhost:3000/user
GET /user HTTP/1.1
Host: localhost:3000
access-token: YWRtaW46YWRtaW4=
cache-control: no-cache
Postman-Token: 8eb480b1-0562-489d-836a-8393e2776048