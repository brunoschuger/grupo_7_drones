const express = require("express");
const path = require("path");
const router = express.Router(); 
const userControllers = require('../controllers/userControllers');
const validar = require('../middleware/authregister');
const upload = require ('../middleware/userImg'); 

router.get("/register", userControllers.getRegister);
router.get("/completeUsers", userControllers.getCompleteUsers);
router.post('/register', [ upload.single('img'), validar.validacionesRegistro], userControllers.registerUser);






module.exports = router;