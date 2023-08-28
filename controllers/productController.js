	const path = require("path");
	const productModel = require("../models/product"); // ya no sirve
	const fs = require("fs");
	const expressValidator = require("express-validator");
	const { Product } = require('../database/models')
	const { Category } = require('../database/models')

	const controllers = {
		getProductFilmaciones: (req, res) => {
			res.render("productdetail-filmaciones", {
				title: "7 Drones - Servicios de filmaciones",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user
			});
		},
	

		getProducts: (req, res) => {
			res.render("products", {
				title: "7 Drones - Nuestros productos",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user
			});
		},

		getProductCursos: (req, res) => {
			res.render("productdetail-cursos", {
				title: "7 Drones - Aprende a volar",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user
			});
		},

		getProductTecnico: (req, res) => {
			res.render("productdetail-serviciotecnico", {
				title: "7 Drones - Servicio técnico",
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user
			});
		},
		getProductAccesorios: async (req, res) => {
			try {
				
				const productsAccesorios = await Product.findAll({	
						include: {
							model: Category,
							as: 'categories',
							where: { name: 'accesorios' },
						}, 
					
					
				});
				
				

				res.render("productdetail-accesorios", {
					title: "Accesorios",
					productsAccesorios,
					logoRoute: "../images/logo-7drones.svg",
					user: req.session.user,
				});
			}
			catch (error) {
				res.send("algo ha pasao:   "  +  error); console.log(error)
			}
		},
		getProductDrones: async (req, res) => {
			try {
				/* const products = await Product.findAll();
				raw: true; */
				const productsDrones = await Product.findAll({	
						include: {
							model: Category,
							as: 'categories',
							where: { name: 'drones' },
						}, 
					
					
				});
				
				

				res.render("productdetail-drones", {
					title: "Drones",
					productsDrones,
					logoRoute: "../images/logo-7drones.svg",
					user: req.session.user,
				});
			}
			catch (error) {
				res.send("algo ha pasao:   "  +  error); console.log(error)
			}
		},
		getProductDetail: async (req, res) => {
			const id = Number(req.params.id);
			try {
				const productoAMostrar = await Product.findByPk(id);
				if (!productoAMostrar) {
					// Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
					// *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
					return res.send("error de id");
				}

				res.render("productDetail", {
					title: "Detalle de producto",
					productoAMostrar,
					logoRoute: "../../../images/logo-7drones.svg",
					user: req.session.user
				})
			} catch (error) { console.log(error); res.send("algo ha pasao") };
		},
		postProduct: async (req, res) => {
			let datos = req.body;
			datos.price = Number(datos.price);
			datos.img = "/images/uploads/" + req.file.filename;
			datos.imgSale =
				"/images/img-drones-fondo-blanco/" + req.file.filename;
			/*  datos.imgs = req.files.map(file => '/imgs/products' + file.filename); PARA SUBIR MAS DE UNA IMAGAEN*/
			try {
				await Product.create(datos);
				/* console.log(req.files)  */
				res.redirect("/products/productdetail-drones");
			}
			catch (error) { console.log(error); res.send("Error en la creacion del producto" + error) }
		},
		getCreate: (req, res) => {
			res.render("createProduct", { user: req.session.user });
		},
		getUpdate: async (req, res) => {
			const id = Number(req.params.id);
			try {
				const productoAModificar = await Product.findByPk(id);

				if (!productoAModificar) {
					// Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
					// *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
					return res.send("error de id");
				}

				res.render("edit", {
					title: "editar o elminar articulo",
					product: productoAModificar,
					user: req.session.user
				})
			} catch (error) { res.send("algo ha pasao"); console.log(error) };
		},
		updateProduct: async (req, res) => {
			/* const id = Number(req.params.id); */
			const nuevosDatos = req.body;
			const esOferta = nuevosDatos.sale === 'on';
			nuevosDatos.sale = esOferta
			if (req.file) {
				// Acceder a la imagen principal cargada en req.file
				nuevosDatos.img = "/images/uploads/" + req.file.filename;
			}
		
			// Verificar si se cargó una nueva imagen de oferta
			if (req.files.length > 0) {
				// Acceder a las imágenes de oferta cargadas en req.files
				nuevosDatos.imgSale = "/images/uploads/" + req.files[0].filename;
			}
			/* nuevosDatos.img = req.file ? req.file.filename : req.body.oldImg; */
			try {
				await Product.update(nuevosDatos, {
					where: {
						id: req.body.id
					}
					
				}),
					res.redirect("/products/productdetail-drones");
					console.log("req file:" + req.file + "req files:" + req.files)
				} catch (error) {
				res.send("algo ha pasao"); console.log(error)
				}
		},
		deleteProduct: (req, res) => {
			const id = Number(req.params.id);
			productModel.deleteById(id);
			res.redirect("/products/productdetail-drones");
		},
	};
	
	
	module.exports = controllers;
