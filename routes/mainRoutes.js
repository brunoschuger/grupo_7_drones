const express = require("express");
const path = require("path");
const router = express.Router();
const mainController = require("../controllers/mainController");
const {guestMiddleWare} = require("../middleware/access")

router.get("/", mainController.getIndex);
router.get("/login", guestMiddleWare, mainController.getLogin);
router.get("/shoppingCart", mainController.getCart);
router.post("/login", mainController.loginController);
router.get('/logout', mainController.logOutController);



module.exports = router;
