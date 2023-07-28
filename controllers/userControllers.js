const path = require("path");
const userModel = require("../database/models/Users");

const fs = require("fs");
const expressValidator = require("express-validator");
const bcrypt = require("bcrypt");
const Users = require("../database/models/Users");

const controllers = {
	/* getRegister: (req, res) => {
		res.render("register", {
			title: "7 Drones - Registrate",
			logoRoute: "../images/logo-7drones.svg",
			errors: [],
			values: {},
			user: req.session.user,
		});
	}, */
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
		try {
			const validation = expressValidator.validationResult(req);
			if (!validation.isEmpty()) {
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

			const newPassword = bcrypt.hashSync(req.body.password, 12);
			user.confirmPassword = "";
			user.password = newPassword;
			user.img = "/images/uploads/profile-imgs/" + req.file.filename;
			user.admin = user.email.endsWith("@7drones.com.ar");

			const newUser = await Users.create(user);

			res.render("registerSucces", {
				title: "Bienvenido",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user,
				nuevoUsuario: newUser.first_name,
			});
		} catch (error) {
			console.error(error);
			res.render("error", {
				title: "Error",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user,
			});
		}
	},
	getUserProfile: (req, res) => {
		const id = req.params.id;
		const usuarioAMostrar = req.session.user;
		console.log(usuarioAMostrar);
		if (!usuarioAMostrar) {
			return res.send("No se puede acceder al usuario");
		}
		res.render("userProfile", {
			title: "El perfil de" + req.session.user.first_name,
			usuarioAMostrar,
			logoRoute: "./images/logo-7drones.svg",
			user: req.session.user,
		});
	},
	geteditUsers: async (req, res) => {
		const id = req.params.id;
		try {
			const usuarioAEditar = await userModel.findByPk(id);
			if (!usuarioAEditar) {
				return res.send("No se puede acceder al usuario");
			}

			res.render("editUsers", {
				title: `Editar usuario ${usuarioAEditar.first_name}`,
				usuarioAEditar,
				logoRoute: "./images/logo-7drones.svg",
				user: req.session.user,
			});
		} catch (error) {
			console.log(error);
			res.send("Error al obtener el usuario para editar");
		}
	},
	error: (res, req) => {
		res.render("/error");
	},
};

module.exports = controllers;
