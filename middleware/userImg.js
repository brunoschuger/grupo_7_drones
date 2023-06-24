const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/uploads/profile-imgs');
  },
  filename: (req, file, cb) => {
    const username = req.body.username;
    const extension = file.originalname.split('.').pop();
    cb(null, Date.now() + '_' + username + '.' + extension);
  }
});

const upload = multer({ storage });

module.exports = upload;