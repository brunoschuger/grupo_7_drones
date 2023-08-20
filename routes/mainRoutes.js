const express = require("express");
const path = require("path");
const router = express.Router();
const mainController = require("../controllers/mainController");
const {guestMiddleWare} = require("../middleware/access")

router.get("/", mainController.getIndex);
router.get("/login", guestMiddleWare, mainController.getLogin);
router.get("/shoppingCart", mainController.getCart);
router.post("/login", mainController.loginController);
router.get('/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/login');
  });

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
