const path = require("path");
const productModel = require("../models/product");
const usersModel = require("../models/user");
const bcrypt = require("bcrypt")
const { Product } = require('../database/models');
const { User } = require('../database/models')



const controllers = {
	getIndex: async (req, res) => {
		try{const ofertas = await Product.findAll({where: {sale: 1} });
			res.render("index", {
				title: "7 Drones - Eleva tu visión",
				logoRoute: "images/logo-7drones.svg",
				ofertas,
				user: req.session.user,
			})} catch(error){res.send("oh dios mio algo ha pasao"); console.log(error)};
	},

	getLogin: (req, res) => {
		res.render("login", {
			title: "7 Drones - Login",
			logoRoute: "images/logo-7drones.svg",
			errors: {}, 
			user: req.session.user
		});
	},

	getCart: (req, res) => {
		res.render("shoppingcart", {
			title: "Carrito de compras",
			logoRoute: "images/logo-7drones.svg",
			user: req.session.user
		});
	},
	loginController: async (req, res) => {
		try{ const searchedUser = await User.findOne({
			where: { email: req.body.email },
			raw: true,
		  }); console.log(searchedUser)
		
		if (!searchedUser) {
			return res.render("login", {
				title: "7 Drones - Login",
				logoRoute: "images/logo-7drones.svg",
				errors: "Usuario o Contraseña INVALIDOS",
				user: req.session.user
			})
		}
		const ofertas =  await Product.findAll({where: {sale: 1} })
		/* const {password: hashedpw} = searchedUser */
		const isCorrect = await bcrypt.compareSync(req.body.password, searchedUser.hashedpw); 
		if (!isCorrect) {
			return res.render("login", {
				title: "7 Drones - Login",
				logoRoute: "images/logo-7drones.svg",
				errors: "Usuario o Contraseña INVALIDOS",
				user: req.session.user,
				ofertas
			})
		}
		/* delete searchedUser.password  */
		/* delete searchedUser.confirmPassword */
		req.session.user = searchedUser;
		console.log(searchedUser)
		
		if (req.body.remember) {
			const oneWeekInSeconds = 7 * 24 * 60 * 60;
			res.cookie('rememberMe', '1', { maxAge: oneWeekInSeconds * 1000 });
		  }
		
		res.render("index", {
			title: "7 Drones - Eleva tu visión",
			logoRoute: "images/logo-7drones.svg",
			ofertas,
			user: searchedUser,
		})} catch(error){"Hubo un problema" + console.log(error)}
		
	},
	logOutController: (req, res) => {
		req.session.destroy();

  // Borrar la cookie de recordatorio si existe
  if (req.cookies.rememberMe) {
    res.clearCookie('rememberMe');
  }

  res.redirect('/login');
}

};

module.exports = controllers;
