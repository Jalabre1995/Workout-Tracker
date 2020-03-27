const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const mongojs = require('mongojs');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const workout = require("./models/tracker.js")
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongod://lcoalhost/userdb", { useNewUrlParser: true});





//routes
app.use(require("./public/api.js"));

/////Inserting data into Mongo/////


express.get("/", (req, res) => {
    res.status(200).sendFile("index.html");
})



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

