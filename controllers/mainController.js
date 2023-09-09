const path = require("path");
const productModel = require("../models/product");
const usersModel = require("../models/user");
const bcrypt = require("bcrypt")
const expressValidator = require("express-validator");
const { Product } = require('../database/models');
const { User } = require('../database/models')



const controllers = {
	getIndex: async (req, res) => {
		try {
			const ofertas = await Product.findAll({ where: { sale: 1 } });
			res.render("index", {
				title: "7 Drones - Eleva tu visión",
				logoRoute: "images/logo-7drones.svg",
				ofertas,
				user: req.session.user,
			})
		} catch (error) { res.send("oh dios mio algo ha pasao"); console.log(error) };
	},

	getLogin: (req, res) => {
		res.render("login", {
			title: "7 Drones - Login",
			logoRoute: "images/logo-7drones.svg",
			errors: [],
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
		/*const searchedUser = await User.findOne({
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
	   } */
		/* const {password: hashedpw} = searchedUser */
		/* const isCorrect = await bcrypt.compareSync(req.body.password, searchedUser.hashedpw); 
		if (!isCorrect) {
			return res.render("login", {
				title: "7 Drones - Login",
				logoRoute: "images/logo-7drones.svg",
				errors: "Usuario o Contraseña INVALIDOS",
				user: req.session.user,
				ofertas
			})
		} */
		try {
			const validation = expressValidator.validationResult(req);
			console.log(validation.errors);
			if (validation.errors.length > 0) {
				return res.render("login", {
					title: "7 Drones - Login",
					logoRoute: "images/logo-7drones.svg",
					errors: validation.errors,
					user: req.session.user
				})
			} else {
				const ofertas = await Product.findAll({ where: { sale: 1 } })
				const searchedUser = await User.findOne({
					where: { email: req.body.email },
					raw: true,
				}); 
				req.session.user = searchedUser;
				console.log("ACA EL REQ SESSION" + JSON.stringify(req.session.user))


				if (req.body.remember) {
					const oneWeekInSeconds = 7 * 24 * 60 * 60;
					res.cookie('rememberMe', '1', { maxAge: oneWeekInSeconds * 1000 });
				}

				res.render("index", {
					title: "7 Drones - Eleva tu visión",
					logoRoute: "images/logo-7drones.svg",
					ofertas,
					user: searchedUser,
				})
			}
		} catch (error) { res.send("Hubo un problema con el inicio de sesion") + console.log(error) }

	},
	logOutController: (req, res) => {
		req.session.destroy();

		// Borrar la cookie de recordatorio si existe
		if (req.cookies.rememberMe) {
			res.clearCookie('rememberMe');
		}

		res.redirect('/login');
	},

	getConocenos: (req, res) => {
		res.render("conocenos", {
			title: "Sobre Nosotros",
			logoRoute: "images/logo-7drones.svg",
			user: req.session.user
		});
	},

	getNoticias: (req, res) => {
		const noticias = [
			{
			  title: 'China',
			  link: 'https://www.lanacion.com.ar/tecnologia/no-es-un-ovni-pero-parece-china-fabrico-el-primer-platillo-volador-tripulado-nid07062023/',
			  image:'/images/china.png'
			},
			{
				title: 'Estados Unidos',
				link: 'https://www.lanacion.com.ar/el-mundo/escandalo-la-fuerza-aerea-de-eeuu-desmintio-el-experimento-del-dron-asesino-y-el-oficial-que-lo-nid03062023/',
				image:'/images/eeuu.png'
			  },
			  {
				title: 'Salud',
				link: 'https://www.lanacion.com.ar/tecnologia/como-son-las-primeras-pruebas-para-el-traslado-de-organos-con-drones-para-mejorar-los-trasplantes-en-nid16052023/',
				image:'/images/salud.png'
			  },
			{
			  title: 'Juegos Olimpicos',
			  link: 'https://www.lanacion.com.ar/deportes/juegos-olimpicos/juegos-olimpicos-de-paris-2024-los-drones-una-gran-amenaza-para-los-encargados-de-la-seguridad-en-su-nid19032023/',
			  image:'/images/jjoo.png'
			},
		];

		res.render("noticias", {
			title: "Noticias",
			logoRoute: "images/logo-7drones.svg",
			noticias,
			user: req.session.user
		});
	},

};

module.exports = controllers;
