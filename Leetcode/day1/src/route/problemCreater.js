const express = require("express");
const { create } = require("../model/problem");
const  problemRouter = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
// const problemController = require("../controller/problemController");
const {createProblem} = require("../controller/userProblem");

// create
problemRouter.post("/create",adminMiddleware,createProblem)
// fetch
// problemRouter.get("/:id",getProblemById)
// problemRouter.get("/",getAllProblem)
// problemRouter.get('/user',solvedAllProblem)
// update
// problemRouter.patch("/:id",updateProblem)
// delete
// problemRouter.delete("/:id",problemDelete)


module.exports = problemRouter