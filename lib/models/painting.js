const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const PaintingSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    artist: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    year: Number,
    location: {
        type: String,
        trim: true
    },
    img: String
})

const Painting = mongoose.model("Painting", PaintingSchema)

module.exports = Painting
