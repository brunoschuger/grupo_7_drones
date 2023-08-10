const express = require("express");
const path = require("path");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const validar = require("../middleware/authregister");
const upload = require("../middleware/userImg");
const { guestMiddleWare } = require("../middleware/acces");

router.get("/:id/userProfile", userControllers.getUserProfile);
router.post("/:id/userProfile", userControllers.getUserProfile);
router.get("/register", guestMiddleWare, userControllers.getRegister);
router.get("/completeUsers", userControllers.getCompleteUsers);
router.post(
	"/register",
	[upload.single("profileImg"), validar.validacionesRegistro],
	userControllers.registerUser
);
// Ruta para cambio de foto
router.get('/changePhoto', (req, res) => {
	res.render('changePhoto'); 
  });
  
  // Ruta para la nueva foto
  router.post('/uploadProfileImage', (req, res) => {
	
  });
module.exports = router;
