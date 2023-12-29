const express = require("express");
const { getcoursById, addcours, deletecours, modifyCoursById, getAllcours } = require("../Controllers/coursController");
const coursRouter = express.Router();




coursRouter.get("/:id",getcoursById);
coursRouter.post("/",addcours);
coursRouter.delete("/:id/",deletecours);
coursRouter.put("/:id",modifyCoursById);
coursRouter.get("/",getAllcours);











module.exports = coursRouter;