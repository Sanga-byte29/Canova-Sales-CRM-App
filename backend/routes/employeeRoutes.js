const express = require('express');
const { getEmployees, addEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getEmployees);
router.post('/add', addEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;