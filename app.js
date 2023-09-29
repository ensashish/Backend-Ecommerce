const express = require('express');
const dotenv = require('dotenv');
const {dbConnect} = require('./config/dbConnect');
const {router} = require('./route/authRoute.js');
const bodyParser = require('body-parser');
const {errorHandler, notFound} = require('./middleware/errorHandlers')
const app = express();
dotenv.config();
dbConnect();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use('/api/user', router);
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res)=>{
    res.json({
        server :"Ruuning",
        PORT : 3000
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running at PORT : ${PORT}`);
});