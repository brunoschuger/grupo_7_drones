const express = require("express");
const path = require("path");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const validar = require("../middleware/authregister");
const upload = require("../middleware/userImg");
const { guestMiddleWare } = require("../middleware/acces");
const Users = require("../database/models/Users");

router.get("/error");
router.get("/:id/userProfile", userControllers.getUserProfile);
router.get("/register", guestMiddleWare, userControllers.registerUser);
router.post("/register", async (req, res) => {
	try {
		const { username, email, hashedpw, profilelmg, last_name, first_name } =
			req.body;

		const newUser = await Users.create({
			username,
			email,
			hashedpw,
			profilelmg,
			last_name,
			first_name,
		});

		res.redirect("/register");
	} catch (error) {
		console.error(error);
		res.status(500).send("Error en el registro. Inténtalo de nuevo.");
	}
});
router.get("/completeUsers", userControllers.getCompleteUsers);
router.get("/:id/editUsers", userControllers.geteditUsers);
router.post(
	"/register",
	[upload.single("img"), validar.validacionesRegistro],
	userControllers.registerUser
);

module.exports = router;
