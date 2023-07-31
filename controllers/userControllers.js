const path = require("path");
const userModel = require("../models/user");
const fs = require("fs");
const expressValidator = require("express-validator");
const bcrypt = require('bcrypt')
const { User } = require('../database/models')
const { v4: uuidv4 } = require('uuid')

const controllers = {
	getRegister: (req, res) => {
		res.render("register", {
			title: "7 Drones - Registrate",
			logoRoute: "../images/logo-7drones.svg",
			errors: [],
			values: {},
			user: req.session.user
		});
	},
	getCompleteUsers: (req, res) => {
		const users = userModel.findAll();
		res.render("completeUsers", {
			title: "Drones",
			users,
			logoRoute: "../images/logo-7drones.svg",
			user: req.session.user
		});
	},
	registerUser: async (req, res) => {
		const validation = expressValidator.validationResult(req)
		console.log(validation); console.log(validation.errors)
		if (validation.errors.length > 0) {
			return res.render('register', {
				title: "7 Drones - Registrate",
				logoRoute: "../images/logo-7drones.svg",
				errors: validation.errors,
				values: req.body,
				user: req.session.user
			})
		}
		const user = {
			...req.body
		};
		
		const newPassword = bcrypt.hashSync(user.password, 12);
		/* user.confirmPassword = "" */
		user.hashedpw = newPassword;
		user.profileImg = "/images/uploads/profile-imgs/" + req.file.filename;
		if (user.email.endsWith('@7drones.com.ar')) {
			user.admin = true;
		} else { user.admin = false }
		user.uuid_id = uuidv4();
		try {
			User.create(user);

			res.render('registerSuccess', {
				title: "Bienvenido",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user,
				nuevoUsuario: user.first_name
			})
		} catch (error) {
			console.log(error);
			res.send("Error en la creación del usuario.");
		}
	},
	getUserProfile: (req, res) => {
		const id = (req.params.id);
		const usuarioAMostrar = req.session.user
		console.log(usuarioAMostrar)
		if (!usuarioAMostrar) {
			return res.send("No se puede acceder al usuario");
		}
		res.render("userProfile", {
			title: "El perfil de" + req.session.user.first_name,
			usuarioAMostrar,
			logoRoute: "../../images/logo-7drones.svg",
			user: req.session.user
		});
	}
}

module.exports = controllers;
