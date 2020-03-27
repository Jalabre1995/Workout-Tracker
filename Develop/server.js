const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');



const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.use(express.static("public"));

const databaseUrl = "tracker";
const collections = ["workouts"];

const db = mongo.js(databaseUrl, collections)

db.on('error', error => {
    console.log('Database Error: ', error);
})

mongoose.connect(process.env.MONGODB_URI || "mongod://lcoalhost/workout", { useNewUrlParser: true});



//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

/////Inserting data into Mongo/////


express.get("/", (req, res) => {
    res.status(200).sendFile("index.html");
})



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

