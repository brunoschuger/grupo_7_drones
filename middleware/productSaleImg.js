const multer = require('multer');

const imageSaleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/uploads'); // Ruta de destino para guardar las imágenes de oferta
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const uploadImageSale = multer({
  storage: imageSaleStorage,
}).single('imgSale'); 

module.exports = uploadImageSale;