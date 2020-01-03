const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost/paintings"

mongoose.Promise = Promise



mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( feedback => console.log("Connected to DB"))
// .then( function() { return console.log('Connected to DB')})
.catch( error => console.log("It broke, here's why: ", error))


module.exports = mongoose