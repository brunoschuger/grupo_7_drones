const express = require("express");
const path = require("path");
const router = express.Router(); 
const mainController = require('../controllers/mainController')

router.get("/", mainController.getIndex);
router.get("/login", mainController.getLogin),
router.get("/shoppingCart", mainController.getCart)

/* 
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/home/index.ejs"));
}); */

/* router.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/register.ejs"));
});

router.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/login.ejs"));
});
 */

module.exports = router;

