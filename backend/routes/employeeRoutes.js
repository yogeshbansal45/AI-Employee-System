const protect = require("../middleware/authMiddleware");

const express = require("express");

const router = express.Router();

const {
    addEmployee,
    getEmployees,
    searchEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

// router.post("/", addEmployee);
// router.get("/", getEmployees);
// router.get("/search", searchEmployee);
// router.put("/:id", updateEmployee);
// router.delete("/:id", deleteEmployee);

router.post("/", protect, addEmployee);

router.get("/", protect, getEmployees);

router.get("/search", protect, searchEmployee);

router.put("/:id", protect, updateEmployee);

router.delete("/:id", protect, deleteEmployee);

module.exports = router;

