const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const Workout = require('./models/tracker.js')
const {Types: {ObjectId}} = require('mongoose');

const PORT = process.env.PORT || 8080;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://workout:password23@ds225253.mlab.com:25253/heroku_9wwtcqtb";

mongoose.connect(MONGODB_URI); 
//Local Host 'mongod://localhost/workout'



//routes
app.use(require("./routes/view.js"));



/////Inserting data into Mongo/////
///Creating a workout//////
app.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then(done => {
        res.json(done);
        console.log(req.body)
    })
    .catch(err => {
        res.json(err);
    });
});


///Used by the api.js to get the last workout///
app.put ('/api/workouts/:id', ({body, params}, res) => 
Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercise: body} },
    // run some validations to make sure our schema requirements are met//
    { new: true, runValidators: true}
).then(dbWorkout => {
    res.json(dbWorkout);
    console.log(dbWorkout)
    console.log(params.id);
})
.catch(err => {
    res.json(dbWorkout);
})
.catch (err => {
    res.json(err);
}))


//// Retreiving a exercise from the database///
app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Updating a workout/////
app.put('/api/workouts/:id', (req, res) => {
    db.Workout.updateOne({'_id': ObjectId(req.params.id)}, 
    {$push: 
    {'exercises': req.body}})
    .then(dbUpdate => {
        res.json(dbUpdate);
        console.log(dbUpdate)
    })
    .catch(error => {
        res.json(error);
    })
})





///Get the range for all the workouts/////
app.get(`/api/workouts/range`, (req, res) => {
   db.Workout.find({})
   .then(dbRanges => {
       res.json(dbRanges)
       console.log(dbRanges)
       return this.json
   })
   .catch(error => {
       res.json(error);
   })
});

///Deleting a  exercise ////
app.delete('/api/workouts', ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
        console.log(body.id)
    })
    .catch(err => {
        res.json(err);
    });
});



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});



module.exports = express