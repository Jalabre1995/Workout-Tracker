const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker",{
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = require('./models')



//routes
app.use(require("./public/api.js"));
app.use(require("./html-routes"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

