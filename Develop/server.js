const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const mongojs = require('mongojs')

const PORT = process.env.PORT || 3000;

const app = express();
const db = require("./models")


app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
const databaseUrl = 'exeercises';
const collections = ['type', 'name', 'duration', 'weight', 'reps', 'sets', 'distance']

const db = mongojs(databaseUrl, collections);



db.on('error', function(error){
console.log('Database Error:', error);
})

const User = require('./models/tracker')
//routes
app.use(require("./public/api.js"));

/////Inserting data into Mongo/////


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

