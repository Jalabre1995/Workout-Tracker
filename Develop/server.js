const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');


const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongod://lcoalhost/workout", { useNewUrlParser: true});



//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./models/tracker.js")

/////Inserting data into Mongo/////
app.post("/submit", ({body}, res) => {
    workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


///Used by the api.js to get the last workout///
app.get('/api/workouts', (req, res) => {
    db.workout.find({})
    .then(tracker => {
        res.json(tracker);
    })
    .catch(err => {
        res.json(err);
    })
})


////Creates a new workout in the database/////
app.post('/api/workouts', async(req, res)=> {
///Throwing in a try statement that would be executed if the statement is executed//
try{
    const response = await db.workout.create({type:"workout"})
    res.json(response);
}
catch(err) {
    console.log('error occured creating a workout: ', err)
}
}) 

///Adding a exercise to the database//////

app.put('/api/workouts/:id', ({body, params }, res) => {
console.log(body, params);
const workoutId = params.id;
let savedExercises = [];
db.workout.insert(savedExercises, workoutId)
});

///Ge the current saved exercises/////
db.workout.find({_id:workoutId})
.then(dbWorkout => {
savedExercises = dbWorkout[0].exercises;
res.json(dbWorkout[0].exercises);
let allExercises = [...savedExercises, body]
console.log(allExercises);
})
.catch(err => {
res.json(err);
});



////Update a workout//////
udateWorkout(exercises => {
db.workout.findIdAndUpdate(workoutId, {exercises: exercises}, (err,doc => {
    if(err) {
        console.log(err);
    }
}) )
});

///Get the range for all the workouts/////
app.get('/api/workouts/range', (req, res) => {
db.workout.find({})
.then(workout => {
    res.json(workout);
})
.catch(err => {
    res.json(err);
})
} )

///Deleting a  exercise ////
app.delete('/delete/:id', (req, res) => {
db.workout.remove(
    {
        _id: mongojs.OnjectID(req.params.id)
    },
    (error, data) => {
        if(error) {
            res.send(error);
        }else{
            res.send(data);
        }
    }
)
})



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

