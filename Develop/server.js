const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const User = require("./models/tracker.js")

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker",{
    useNewUrlParser: true,
    useFindAndModify: false
});

app.post("/submit", ({body}, res) => {
    User.create(body)
    .then(dbTracker => {
        res.json(dbTracker);
    })
    .catch(err => {
        res.json(err);
    });
});


//routes
app.use(require("./public/api.js"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

