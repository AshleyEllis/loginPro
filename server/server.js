const express = require("express");
const mongoose = require ('mogoose')
require('dotenv').config();

const app = express()

//database
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('DB CONN'))
.catch((err)=> console.log("DB Con error", err))
app.get("/api/:message", (req, res)=> {//gets message- request and response
    res.status(200).send("Hi Nabeeha and Sterling!");

});


app.listen(process.env.PORT);// port