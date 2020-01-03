const mongoose = require('./connection')
const data = require('./paintings.json')

const Painting = require('../models/painting')

// Bookmark.find({}).then( (bookmarks) => {
//     Bookmark.create(data).then( bookmark => {
//         console.log("Created: ", bookmark)
//     })
// })

Painting.deleteMany({}).then( () => {
    Painting
    .create(data)
    .then( (dataReturn) => {
        console.log(dataReturn)
        process.exit()
    })
    .catch( (err) => {
        console.log
    })
})