const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController');
const upload = require ('../middleware/productImg')
const uploadImageSale = require ('../middleware/productSaleImg');
const { adminMiddleWare} = require("../middleware/access")


router.get("/:id/productDetail", productController.getProductDetail)
router.get("/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/productdetail-cursos", productController.getProductCursos);
router.get("/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/productdetail-drones", productController.getProductDrones);
router.post("/", [upload.single('img'), adminMiddleWare], productController.postProduct);
router.get("/createProduct", adminMiddleWare, productController.getCreate); 
router.put("/:id/edit", [upload.any(), adminMiddleWare], productController.updateProduct)
router.get("/:id/edit", adminMiddleWare, productController.getUpdate)
router.delete("/:id/delete", adminMiddleWare, productController.deleteProduct);

router.get("/", productController.getProducts),
 




module.exports = router;