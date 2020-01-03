const Painting = require("../models/painting")

module.exports = {
    index: (req, res) => {
        Painting.find({}).then( (paintings) => {
            res.json(paintings)
        })
    },
    create: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {}
}