const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController');
const upload =require ('../middleware/productImg');


router.get("/:id/productDetail", productController.getProductDetail)
router.get("/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/productdetail-cursos", productController.geProductCursos);
router.get("/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/productdetail-drones", productController.getProductDrones);
router.post("/", upload.single('img'), productController.postProduct);
router.get("/createProduct", productController.getCreate); 
router.put("/:id/edit", upload.single('img'), productController.updateProduct)
router.get("/:id/edit", productController.getUpdate)

router.delete("/:id/delete", productController.deleteProduct);
 



module.exports = router;