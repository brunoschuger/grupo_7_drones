const express = require("express");
const path = require("path");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const validar = require("../middleware/authregister");
const upload = require("../middleware/userImg");
const update = require("../middleware/userImg-update");
const { userProfileValidationRules } = require("../middleware/profileUpdateValidation")
const { guestMiddleWare, userMiddleWare } = require("../middleware/access");

router.get("/:id/userProfile", userMiddleWare, userControllers.getUserProfile);
router.get("/register", guestMiddleWare, userControllers.getRegister);
router.get("/completeUsers", userControllers.getCompleteUsers);
router.post("/:id/userProfile", /* userProfileValidationRules, */ userControllers.getUserProfile);
router.post("/register", [upload.single("profileImg"), validar.validacionesRegistro],
	userControllers.registerUser);
router.post("/:id/uploadProfileImage", userMiddleWare, update.single("profileImg"), userControllers.uploadProfileImage)

/* APIS */
router.get("/api/users", userControllers.getUsersApi);
router.get("/api/:id/user-detail", userControllers.getUserDetailApi);


module.exports = router;
