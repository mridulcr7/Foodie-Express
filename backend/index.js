require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require("cors");


const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

const dbURI = process.env.MONGO_URI_DEV;

mongoose.connect(dbURI)
    .then(() => {
        console.log("Let's go")
        app.listen(PORT);
    })
    .catch(err => {
        console.log("ERROR!!")
        console.log(err)
    })

app.use(routes);