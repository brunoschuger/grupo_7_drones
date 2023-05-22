const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController')



router.get("/products/productdetail", productController.getProductDetail);
router.get("/products/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/products/productdetail-cursos", productController.geProductCursos);
router.get("/products/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/products/productdetail-accesorios", productController.getProductAccesorios);
router.get("/products/productdetail-drones", productController.getProductDrones);


module.exports = router;
