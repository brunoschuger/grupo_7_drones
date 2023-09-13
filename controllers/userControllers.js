const path = require("path");
const userModel = require("../models/user");
const fs = require("fs");
const expressValidator = require("express-validator");
const bcrypt = require("bcrypt"); 	
const { User } = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const { profile } = require("console");

const controllers = {
	getRegister: (req, res) => {
		res.render("register", {
			title: "7 Drones - Registrate",
			logoRoute: "../images/logo-7drones.svg",
			errors: [],
			values: {},
			user: req.session.user,
		});
	},
	getCompleteUsers: (req, res) => {
		const users = userModel.findAll();
		res.render("completeUsers", {
			title: "Drones",
			users,
			logoRoute: "../images/logo-7drones.svg",
			user: req.session.user,
		});
	},
	registerUser: async (req, res) => {
		const validation = expressValidator.validationResult(req);
		const errors = validation.errors
		console.log(validation.errors);
		if (errors.length > 0) {
			return res.render("register", {
				title: "7 Drones - Registrate",
				logoRoute: "../images/logo-7drones.svg",
				errors: validation.errors,
				values: req.body,
				user: req.session.user,
			});
		}
		const user = {
			...req.body,
		};

		const newPassword = bcrypt.hashSync(user.password, 12);
		/* user.confirmPassword = "" */
		user.hashedpw = newPassword;
		if(req.file){
			user.profileImg = "/images/uploads/profile-imgs/" + req.file.filename;
		}
		if (user.email.endsWith("@7drones.com.ar")) {
			user.admin = true;
		} else {
			user.admin = false;
		}
		user.uuid_id = uuidv4();
		try {
			User.create(user);

			res.render("registerSuccess", {
				title: "Bienvenido",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user,
				nuevoUsuario: user.first_name,
			});
		} catch (error) {
			console.log(error);
			res.send("Error en la creación del usuario.");
		}
	},
	getUserProfile: async (req, res) => {
		try {
		  if (req.method === "GET") {
			const userId = req.params.id;
			const userFromDB = await User.findOne({
			  where: { id: userId },
			});
	  
			if (!userFromDB) {
			  return res.send("No se puede acceder al usuario");
			}
	  
			res.render("userProfile", {
			  title: "El perfil de " + userFromDB.first_name,
			  userFromDB,
			  logoRoute: "../../images/logo-7drones.svg",
			  user: req.session.user,
			  errors: [], // Inicialmente, no hay errores
			});
		  } else if (req.method === "POST") {
			const userId = req.params.id;
			const { username, email, currentPassword, newPassword, profileImg } = req.body;
	  
			// Realiza validación aquí y almacena los errores en una variable
			const validation = expressValidator.validationResult(req);
			const errors = validation.errors
	  
			const userFromDB = await User.findOne({
			  where: { id: userId },
			});
	  
			if (!userFromDB) {
			  return res.send("No se puede acceder al usuario");
			}
	  
			if (errors.length > 0) {
			  // Si hay errores de validación, renderiza la vista nuevamente con los errores
			  return res.render("userProfile", {
				title: "El perfil de " + userFromDB.first_name,
				userFromDB,
				logoRoute: "../../images/logo-7drones.svg",
				user: req.session.user,
				errors: errors, // Pasa los errores de validación a la vista
			  });
			}
	  
			if (currentPassword && newPassword) {
			  const isCorrect = await bcrypt.compareSync(currentPassword, userFromDB.hashedpw);
			  if (isCorrect) {
				const hashedNewPassword = bcrypt.hashSync(newPassword, 12);
				await userFromDB.update({ hashedpw: hashedNewPassword })
			  } else {
				res.send('error en su actual contraseña - No se puede actualizar')
			  }
			}
	   
			await userFromDB.update({ username, email });
	  
			res.redirect("/users/" + userId + "/userProfile");
		  }
		} catch (error) {
		  console.log(error);
		  res.send("Error al obtener el perfil del usuario");
		}
	  },
	uploadProfileImage: async (req, res) => {

		try {
			const userId = req.params.id
			if (!req.file) {
				return res.redirect("/users/" + userId + "/userProfile"); // Redirige de vuelta a la página de perfil
			}

			const newProfileImagePath = '/images/uploads/profile-imgs/' + req.file.filename;
			await User.update(
				{ profileImg: newProfileImagePath },
				{ where: { id: userId } }
			);

			res.redirect("/users/" + userId + "/userProfile"); // Redirige a la página de perfil con la nueva imagen
		} catch (error) {
			console.log(error);
			// Manejar el error y redirigir de vuelta a la página de perfil
		}
	},
	getUsersApi: async (req, res) => {
		try {
			const page = parseInt(req.query.page) || 1; // Página solicitada (por defecto 1)
			const pageSize = 5; // Cantidad de usuarios por página

			const users = await User.findAll({
				limit: pageSize,
				offset: (page - 1) * pageSize,
			});

			const totalCount = await User.count(); // Total de productos en la base de datos
			const totalPages = Math.ceil(totalCount / pageSize); // Total de páginas


			const nextPage = page < totalPages ? page + 1 : null;
			const prevPage = page > 1 ? page - 1 : null;

			const response = {
				count: totalCount,
				totalPages: totalPages,
				currentPage: page,
				nextPage: nextPage ? `/api/users?page=${nextPage}` : null,
				prevPage: prevPage ? `/api/users?page=${prevPage}` : null,
				users: users.map(user => ({
					id: user.id,
					username: user.username,
					uuid: user.uuid_id,
					profilePic: user.profileImg,
					detail: `http://localhost:3050/users/api/${user.id}/user-detail`,
				})),
			};

			res.json(response);
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},
	getUserDetailApi: async (req, res) => {
		const userId = req.params.id;

		try {
			const user = await User.findByPk(userId);

			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}




			const response = {
				id: user.id,
				username: user.username,
				email: user.email,
				firstName: user.first_name,
				lastName: user.last_name,
				uuid: user.uuid_id,
				profilePic: user.profileImg
			};

			res.json(response);
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},
	checkEmailAvailability: async (req, res) => {
		const { email } = req.query;
	  
		try {
		  const user = await User.findOne({
			where: { email },
		  });
	  
		  res.json({ available: !user }); // Devuelve true si no se encuentra el usuario, de lo contrario, false
		} catch (error) {
		  console.error(error);
		  res.status(500).json({ error: "Error en el servidor" });
		}
	  }
}





module.exports = controllers;
