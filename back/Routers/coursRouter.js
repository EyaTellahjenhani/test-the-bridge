const express = require('express');
const { readCours, createCours, updateCours, deleteCours } = require('../Controller/coursController');
const coursRouter = express.Router();

coursRouter.get("/read", readCours);
coursRouter.post("/create", createCours);
coursRouter.put("/update/:id", updateCours);
coursRouter.delete("/delete/:id", deleteCours);

module.exports = coursRouter;