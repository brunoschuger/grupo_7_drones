const express = require("express");
const path = require("path");
const router = express.Router(); 
const userControllers = require('../controllers/userControllers');



router.get("/register", userControllers.getRegister);
router.get("/completeUsers", userControllers.getCompleteUsers);
router.post('/', userControllers.registerUser);






module.exports = router;