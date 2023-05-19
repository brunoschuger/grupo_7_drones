const express = require("express");
const path = require("path");

const productRoutes = require('../controllers/productController')

const router = express.Router(); 

router.get("/product/product-detail", productRoutes.getProductDetail);
router.get("/product/product-detail-filmaciones", productRoutes.getProductFilmaciones);

router.get("/product/product-detail-cursos", productRoutes.geProductCursos);
router.get("/product/product-detail-serviciotecnico", productRoutes.getProductTecnico);
router.get("/product/product-detail-accesorios", productRoutes.getProductAccesorios);
router.get("/product/product-detail-drones", productRoutes.getProductDrones);


module.exports = router;
