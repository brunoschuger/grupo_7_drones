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
			const page = req.query.page || 1;
			const limit = 2;
			const offset = (page - 1) * limit;

			const productsAccesorios = await Product.findAll({
				include: {
					model: Category,
					as: 'categories',
					where: { name: 'accesorios' },
				},
				limit,
				offset,
			});

			const totalPages = Math.ceil(productsAccesorios.count / limit);

			res.render("productdetail-accesorios", {
				title: "Accesorios",
				productsAccesorios: productsAccesorios,
				logoRoute: "../images/logo-7drones.svg",
				user: req.session.user,
				totalPages,
				curretPage: page,
			});
		}
		catch (error) {
			res.send("algo ha pasao:   " + error); console.log(error)
		}
	},
	getProductDrones: async (req, res) => {
		try {
		  const PAGE_SIZE = 5
			const page = req.query.page || 1;
		  const offset = (page - 1) * PAGE_SIZE;
	  
		  const productsDrones = await Product.findAndCountAll({
			include: {
			  model: Category,
			  as: 'categories',
			  where: { name: 'drones' },
			},
			limit: PAGE_SIZE,
			offset,
		  });
	  
		  const totalPages = Math.ceil(productsDrones.count / PAGE_SIZE);
	  
		  res.render("productdetail-drones", {
			title: "Drones",
			productsDrones: productsDrones.rows,
			logoRoute: "../images/logo-7drones.svg",
			user: req.session.user,
			totalPages, // Pasamos el número total de páginas
			currentPage: parseInt(page), // Pasamos la página actual como número entero
		  });
		} catch (error) {
		  res.send("algo ha pasao:" + error);
		  console.log(error);
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
	
	getInmuebles: (req, res) => {
		const inmuebles = [
			{
				videoSrc: "/videos/lecoin.mp4", 
			},
			{
				videoSrc: "/videos/lecoin2.mp4", 
			},
			{
				videoSrc: "/videos/amarras.mp4", 
			},
			{
				videoSrc: "/videos/fenix.mp4", 
			},
		];
		
		res.render("inmuebles", {
			title: "Inmuebles",
			inmuebles:inmuebles,
			logoRoute: "../images/logo-7drones.svg",
			user: req.session.user,

		});
	},

	getEventos: (req, res) => {
		const eventos = [
			{
				title: 'Potrerillos, Mendoza.',
				videoSrc: "/videos/potrerillos.mp4", 
			},
			{
				title:'Rally en LLambi Campbell.',
				videoSrc: "/videos/rally.mp4", 
			},
			
			
			{
				title:'Rooftop OneSix, Santa Fe.',
				videoSrc: "/videos/onesix.mp4", 
			},
			{
				title:'Encuentro Toyota para concesionaria Amiun',
				videoSrc: "/videos/amiun.mp4", 
			},
		];
		
		res.render("eventos", {
			title: "Eventos",
			eventos:eventos,
			logoRoute: "../images/logo-7drones.svg",
			user: req.session.user,
			
		});
	},
	







	deleteProduct: (req, res) => {
		const id = Number(req.params.id);
		productModel.deleteById(id);
		res.redirect("/products/productdetail-drones");
	},
		getProductsApi: async (req, res) => {
			try {
				const page = parseInt(req.query.page) || 1; // Página solicitada (por defecto 1)
				const pageSize = 9; // Cantidad de productos por página

				const products = await Product.findAll({
					include: [{ model: Category, as: 'categories' }],
					limit: pageSize,
					offset: (page - 1) * pageSize,
				});

				const totalCount = await Product.count(); // Total de productos en la base de datos
				const totalPages = Math.ceil(totalCount / pageSize); // Total de páginas

				const countByCategory = {};
				products.forEach(product => {
					product.categories.forEach(category => {
						if (!countByCategory[category.name]) {
							countByCategory[category.name] = 0;
						}
						countByCategory[category.name]++;
					});
				});

				const nextPage = page < totalPages ? page + 1 : null;
				const prevPage = page > 1 ? page - 1 : null;

				const response = {
					count: totalCount,
					totalPages: totalPages,
					currentPage: page,
					nextPage: nextPage ? `/api/products?page=${nextPage}` : null,
					prevPage: prevPage ? `/api/products?page=${prevPage}` : null,
					countByCategory,
					products: products.map(product => ({
						id: product.id,
						name: product.name,
						description: product.description,
						detail: `http://localhost:3050/products/api/${product.id}/product-detail`,
						image: product.img
					})),
				};

				res.json(response);
			} catch (error) {
				res.status(500).json({ error: "Internal server error" });
			}
		},
	getProductDetailApi: async (req, res) => {
		const productId = req.params.id;

		try {
			const product = await Product.findByPk(productId, {
				include: [{ model: Category, as: 'categories' }],
			});

			if (!product) {
				return res.status(404).json({ error: "Product not found" });
			}




			const response = {
				id: product.id,
				name: product.name,
				description: product.description,
				// Agrega más propiedades aquí según tus campos en base
				categories: product.categories.map(category => category.name),
				image: product.img,
			};

			res.json(response);
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},
	getLatestProductApi: async (req, res) => {
		try {
		  // Encuentra el producto con el ID más alto (el producto más reciente)
		  const latestProduct = await Product.findOne({
			order: [['id', 'DESC']], // Ordena por ID en orden descendente
			include: [{ model: Category, as: 'categories' }], // Incluye las categorías
		  });
	  
		  if (!latestProduct) {
			return res.status(404).json({ error: "Latest product not found" });
		  }
	  
		  const response = {
			id: latestProduct.id,
			name: latestProduct.name,
			description: latestProduct.description,
			price: latestProduct.price,
			categories: latestProduct.categories.map(category => category.name),
			image: latestProduct.img,
			detail: `http://localhost:3050/products/api/${latestProduct.id}/product-detail`
		  };
	  
		  res.json(response);
		} catch (error) {
		  res.status(500).json({ error: "Internal server error" });
		}
	  }


};


module.exports = controllers;
