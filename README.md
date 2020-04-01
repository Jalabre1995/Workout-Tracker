# Workout-Tracker

The purpose of this project is to create a Workout-Tracker that will keep track of your fitness progress. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

# User's Story
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

# Challenges
The only challenge for this project is getting the stats to appear on the stat.html page. The database is created, however for some reason the json is coming back as undefined. I know that there is something going on with the put method being used. In '/api/workouts/:id', I tried changing the _id as body.params and log it. But the console is still telling me error in api.js. This is being worked on.

# Site
You can check out my website on heroku https://stormy-cove-52446.herokuapp.com/?id=5e83bb543331ab0017fe685b. 

# Database
The database that is used for this project is MongoDB, and a Mongoose Schema through express. 
