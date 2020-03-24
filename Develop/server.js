const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3000;
const databaseUrl = 'exeercises';
const collections = ['type', 'name', 'duration', 'weight', 'reps', 'sets', 'distance']

const db = mongojs(databaseUrl, collections);


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


db.on('error', function(error){
console.log('Database Error:', error);
})

const db = require('./models')
//routes
app.use(require("./public/api.js"));

/////Inserting data into Mongo/////


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

