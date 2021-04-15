const express = require("express");
const { 
    getStudentList,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudent
} = require("../controllers/sudent_controller");
const router = express.Router();

// @route - GET (Read Operation)
// get student list
router.get("/",getStudentList); 
// @route - GET Single Student Data(Read Operation)
// get student data
router.get("/:id",getStudent); 
// @route - POST (Add Student)
// Add new student
router.post("/add/student",addStudent); 
// @route - PUT (Update Student)
// Update existing student
router.put("/update/student/:id",updateStudent); 
// @route - DELETE (Delete Student)
// Delete existing student
router.delete("/delete/student/:id",deleteStudent); 
module.exports = router;