const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController')



router.get("/:id/productDetail", productController.getProductDetail)
router.get("/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/productdetail-cursos", productController.geProductCursos);
router.get("/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/productdetail-drones", productController.getProductDrones);

router.post("/", productController.postProduct)
router.get("/createProduct", productController.getCreate)


module.exports = router;
