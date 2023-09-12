const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController');
const upload = require ('../middleware/productImg')
/* const uploadImageSale = require ('../middleware/productSaleImg'); */
const { adminMiddleWare} = require("../middleware/access")

router.get("/", productController.getProducts);
router.get("/:id/productDetail", productController.getProductDetail)
router.get("/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/productdetail-cursos", productController.getProductCursos);
router.get("/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/productdetail-drones", productController.getProductDrones);
router.get("/createProduct", adminMiddleWare, productController.getCreate); 
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/:id/edit", adminMiddleWare, productController.getUpdate)


router.delete("/:id/delete", adminMiddleWare, productController.deleteProduct);
router.post("/", [upload.single('img'), adminMiddleWare], productController.postProduct);
router.put("/:id/edit", [upload.any(), adminMiddleWare], productController.updateProduct)

/* APIS */

router.get("/api/products", productController.getProductsApi);
router.get("/api/:id/product-detail", productController.getProductDetailApi);
router.get("/api/products/latest", productController.getLatestProductApi);


router.get("/inmuebles", productController.getInmuebles);

router.get("/eventos", productController.getEventos);



module.exports = router;