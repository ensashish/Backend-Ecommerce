const JWT = require('jsonwebtoken');
const data1 = {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
  };
const data2 = "chandel";
const data3 = "prabhkar sir";
const data4 = "hello";
const data5 = "pawan sir";
console.log(JWT.sign(data1,data2));