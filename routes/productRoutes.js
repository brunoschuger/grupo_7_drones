const express = require("express");
const path = require("path");
const router = express.Router(); 
const productController = require('../controllers/productController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/uploads');
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });


router.get("/:id/productDetail", productController.getProductDetail)
router.get("/productdetail-filmaciones", productController.getProductFilmaciones);
router.get("/productdetail-cursos", productController.geProductCursos);
router.get("/productdetail-serviciotecnico", productController.getProductTecnico);
router.get("/productdetail-accesorios", productController.getProductAccesorios);
router.get("/productdetail-drones", productController.getProductDrones);
router.post("/", upload.single('img'), productController.postProduct)
router.get("/createProduct", productController.getCreate)

// Nuevo por Leo
/*  router.delete("/:id/delete", productController.deleteProduct);
router.get("/:id/update", productController.getProduct);
router.put("/:id/update", productController.updateProduct);  */



module.exports = router;