const { Router } = require("express");

// const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const ToDoController =require('../controllers/ToDoController');

const router = Router();

router.get("/get-todo", ToDoController.getToDo);

router.post("/save-todo", ToDoController.saveToDo);

router.post("/delete-todo", ToDoController.deleteToDo);

router.post("/update-todo", ToDoController.updateToDo);

module.exports = router;