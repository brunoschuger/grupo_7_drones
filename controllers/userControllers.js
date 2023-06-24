const path = require("path");
const userModel = require("../models/user");
const fs = require("fs");
const  expressValidator  = require("express-validator");
const bcrypt = require('bcrypt')

const controllers = {
	getRegister: (req, res) => {
		res.render("register", {
			title: "7 Drones - Registrate",
			logoRoute: "../images/logo-7drones.svg",
			errors: [],
			values: {}
		});
	},
	getCompleteUsers: (req, res) => {
		const users = userModel.findAll();
		res.render("completeUsers", {
			title: "Drones",
			users,
			logoRoute: "../images/logo-7drones.svg",
		});
	},
	registerUser: (req, res) => {
			const validation = expressValidator.validationResult(req)
			console.log(validation); console.log(validation.errors)
			if(validation.errors.length > 0 ) {
				return res.render('register', {title: "7 Drones - Registrate",
				logoRoute: "../images/logo-7drones.svg",
				errors: validation.errors,
				values: req.body})
			}
			const user = {
				...req.body
			};
	
			const newPassword = bcrypt.hashSync(user.password, 12);
			user.confirmPassword = "" 
			user.password = newPassword;
			if(user.email.endsWith('@7drones.com.ar')){
				user.admin = true;
			}
			userModel.createOne(user);
	
			res.send('Se registró el usuario');
		}
	,
};

module.exports = controllers;
