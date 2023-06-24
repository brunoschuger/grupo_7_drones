const expressValidator = require('express-validator');
/* const fileTypeMime = require('file-type-mime')  */
const userModel = require('../models/user');

const validaciones = {
  validacionesRegistro: [
    expressValidator.body('username').custom(async (value) => {
      const usuarioExistente = await userModel.findByUsername(value);
      if (usuarioExistente) {
        throw new Error('El nombre de usuario ya está en uso');
      }
    }),
    expressValidator.body('username')
      .trim()
      .notEmpty()
      .withMessage('El nombre de usuario es requerido'),
    expressValidator.body('email')
      .trim()
      .notEmpty()
      .withMessage('El correo electrónico es requerido')
      .isEmail()
      .withMessage('El correo electrónico debe ser válido'),
    expressValidator.body('password')
      .trim()
      .notEmpty()
      .withMessage('La contraseña es requerida')
      .isLength({ min: 8 })
      .withMessage('La contraseña debe tener al menos 8 caracteres')
      .matches(/[A-Z]/)
      .withMessage('La contraseña debe contener al menos una letra mayúscula'),
    expressValidator.body('confirmPassword')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
/*       expressValidator. body('img').custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Debes seleccionar una imagen');
        }
        return true;
      }) */
  ]
};



module.exports = validaciones