const express = require("express")
const paintingsController = require("../controllers/paintings")
const paintingsRouter = express.Router()

paintingsRouter.get("/", paintingsController.index)


module.exports = paintingsRouter
