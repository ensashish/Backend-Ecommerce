const mongoose = require('mongoose');

const dbConnect = async ()=>{
   await mongoose.connect(process.env.MONGODB_URL, {}).then(()=>{
        console.log("---Database connected successfully---");
    }).catch((error)=>{
        console.log("Database Error : "+error);
    });
    // try {
    //     mongoose.connect("mongodb://localhost:27017/ecommerce");
    //     console.log("Database connected successfully");
    // } catch (error) {
    //     console.log("Database Error : "+error);
    // }
}

module.exports = {dbConnect};