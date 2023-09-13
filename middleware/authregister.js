const expressValidator = require('express-validator');
/* const fileTypeMime = require('file-type-mime')  */
const { User } = require('../database/models');
const bcrypt = require("bcrypt");

const validaciones = {
  validacionesRegistro: [
    expressValidator.body('email')
    .custom(async (value) => {
      const usuarioExistente = await User.findOne({
        where: {
          email: value
        }
      });
      if (usuarioExistente) {
        throw new Error('El correo electrónico ya está en uso');
      }
    }),
    expressValidator.body('username').custom(async (value) => {
      const usuarioExistente = await User.findOne({
        where: {
          username: value
        }
      });
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
  ],
  validacionesLogin: [
    expressValidator.body('email')
      .trim()
      .notEmpty()
      .withMessage('El correo electrónico es requerido')
      .isEmail()
      .withMessage('El correo electrónico debe ser válido')
      .custom(async (value) => {
        const usuarioExistente = await User.findOne({
          where: {
            email: value
          }
        });
        if (!usuarioExistente) {
          throw new Error('El correo electrónico no está registrado');
        }
      }),
    expressValidator.body('password')
      .trim()
      .notEmpty()
      .withMessage('La contraseña es requerida')
      .custom(async (value, { req }) => {
        const usuarioExistente = await User.findOne({
          where: {
            email: req.body.email
          },
          raw: true,
        });

        if (!usuarioExistente) {
          throw new Error('Las credenciales no son válidas');
        }

        const isCorrect = await bcrypt.compare(value, usuarioExistente.hashedpw);
        if (!isCorrect) {
          throw new Error('Las credenciales no son válidas');
        }
      }),
  ]
};



module.exports = validaciones