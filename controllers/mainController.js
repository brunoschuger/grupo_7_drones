const path = require("path");
const productModel = require("../models/product");
const usersModel = require("../models/user");


const controllers = {
	getIndex: (req, res) => {
		const ofertas = productModel.findAll();
		res.render("index", {
			title: "7 Drones - Eleva tu visión",
			logoRoute: "images/logo-7drones.svg",
			ofertas,
		});
	},

	getLogin: (req, res) => {
		res.render("login", {
			title: "7 Drones - Login",
			logoRoute: "images/logo-7drones.svg",
			errors: {}
		});
	},

	getCart: (req, res) => {
		res.render("shoppingcart", {
			title: "Carrito de compras",
			logoRoute: "images/logo-7drones.svg",
		});
	},
	loginController: (req, res) => {

		const searchedUser = usersModel.findByEmail(req.body.email) /* users.find((user) => user.email === email); */
		const {password: hashedPw} = searchedUseruser
		const isCorrect = bcrypt.compareSync(req.body.password, hashedPw); 

		if (!searchedUseruser || !isCorrect) {
			return res.render("login", {
				title: "7 Drones - Login",
				logoRoute: "images/logo-7drones.svg",
				errors: "Usuario o Contraseña INVALIDOS"
			})
		}

		req.session.user = searchedUser;

		res.redirect("/");
	},
};

module.exports = controllers;
