const path = require("path");
const productModel = require("../models/products");
const fs = require("fs");
const expressValidator = require("express-validator");

const controllers = {
	getProductFilmaciones: (req, res) => {
		res.render("productdetail-filmaciones", {
			title: "7 Drones - Servicios de filmaciones",
			logoRoute: "../images/logo-7drones.svg",
		});
	},

	geProductCursos: (req, res) => {
		res.render("productdetail-cursos", {
			title: "7 Drones - Aprende a volar",
			logoRoute: "../images/logo-7drones.svg",
		});
	},

	getProductTecnico: (req, res) => {
		res.render("productdetail-serviciotecnico", {
			title: "7 Drones - Servicio técnico",
			logoRoute: "../images/logo-7drones.svg",
		});
	},
	getProductAccesorios: (req, res) => {
		res.render("productdetail-accesorios", {
			title: "7 Drones - Accesorios",
			logoRoute: "../images/logo-7drones.svg",
		});
	},
	getProductDrones: (req, res) => {
		const products = productModel.findAll();
		res.render("productdetail-drones", {
			title: "Drones",
			products,
			logoRoute: "../images/logo-7drones.svg",
		});
	},
	getProductDetail: (req, res) => {
		const id = Number(req.params.id);
		const productoAMostrar = productModel.findById(id);
		if (!productoAMostrar) {
			// Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
			// *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
			return res.send("error de id");
		}

		res.render("productDetail", {
			title: "Detalle de producto",
			productoAMostrar,
			logoRoute: "../images/logo-7drones.svg",
		});
	},
	postProduct: (req, res) => {
		let datos = req.body;
		datos.price = Number(datos.price);
		datos.img = "/images/uploads/" + req.file.filename;
		datos.imgofertas =
			"/images/img-drones-fondo-blanco/" + req.file.filename;
		/*  datos.imgs = req.files.map(file => '/imgs/products' + file.filename); PARA SUBIR MAS DE UNA IMAGAEN*/
		productModel.createOne(datos);
		/* console.log(req.files)  */
		res.redirect("/products/productdetail-drones");
	},
	getCreate: (req, res) => {
		res.render("createProduct");
	},
	getUpdate: (req, res) => {
		const id = Number(req.params.id);

		const productoAModificar = productModel.findById(id);

		if (!productoAModificar) {
			// Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
			// *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
			return res.send("error de id");
		}

		res.render("edit", {
			title: "editar o elminar articulo",
			product: productoAModificar,
		});
	},
	updateProduct: (req, res) => {
		const id = Number(req.params.id);
		const nuevosDatos = req.body;
		nuevosDatos.image = req.file ? req.file.filename : req.body.oldImg;
		productModel.updateById(id, nuevosDatos),
			res.redirect("/products/productdetail-drones");
	},
	deleteProduct: (req, res) => {
		const id = Number(req.params.id);
		productModel.deleteById(id);
		res.redirect("/products/productdetail-drones");
	},
};

module.exports = controllers;
