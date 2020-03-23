const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    name: {
        type: String,
    trim: true,
    required: "Exercise"
    },
    reps: {
        type: Number,
        required: 'How many reps'
    },
    Ibs: {
        type: Number,
        required: 'How much Weight'
    },
    date: {
        type: Date,
        default: Date.now
    },
    
    /////////// Cardio///////
    
    distance: {
        type: Number,
        required: 'How many miles'
    }

    
})