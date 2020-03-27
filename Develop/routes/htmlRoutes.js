////Retreive the path package to retireve the right file////

var path = require('path')

module.exports= (app => {
    //Call when a new workout gets picked /////
    app.get('/exercise', (req, res => {
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    }));
})