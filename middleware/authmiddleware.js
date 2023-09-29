// import User from "../model/user";
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if(req?.headers?.authorization?.startsWith("Bearer")){
      token = req.headers.authorization.split(" ")[1];
      try {
          if(token){
            console.log("12 : >>>",token);
              const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
              console.log("decoded : =>>"+decoded);
          }
      } catch (error) {
          throw new Error("Not a authorized token ! please login again");
      }
  }
  else{
      throw new Error("there is no token attached to header");
  }


  // *************
  

//   const bearerHeader = req.headers["authorization"];
//   console.log("27>>>>>>>bearer header ", bearerHeader);
//   //const bearer = bearerHeader.split(" ");
//   //console.log("29>>>>>>>bearer ", bearer);
//   const token = bearerHeader;
//   console.log("31>>>>>>>token : ",token)
//   if (!token) {
//     return next("33>>>>>>Please Login");
//   }
//   console.log("line 35", process.env.JWT_PRIVATE_KEY);
//   try {
//     console.log("37>>>>>",token);
//     const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
// //    const user = await User.find(decoded)
//     console.log((decoded));
//   } catch (error) {
//     throw new Error("Not a authorized token ! please login again");
//   }
//   next();
});

module.exports = { authMiddleware };
