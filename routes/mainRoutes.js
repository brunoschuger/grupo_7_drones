const express = require("express");
const path = require("path");
const router = express.Router();
const mainController = require("../controllers/mainController");
const {guestMiddleWare} = require("../middleware/access");
const { validacionesLogin } = require("../middleware/authregister");

router.get("/", mainController.getIndex);
router.get("/login", guestMiddleWare, mainController.getLogin);
router.get("/shoppingCart", mainController.getCart);
router.post("/login", validacionesLogin, mainController.loginController);
router.get('/logout', mainController.logOutController);

router.get('/conocenos', mainController.getConocenos);
router.get('/noticias', mainController.getNoticias);




module.exports = router;
