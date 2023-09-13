const { body } = require('express-validator');
const bcrypt = require("bcrypt");
const { User } = require("../database/models");

// Función para verificar que la contraseña actual sea correcta
const checkCurrentPassword = async (currentPassword, { req }) => {
  const userId = req.params.id;
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('No se puede acceder al usuario');
  }

  const isCorrect = await bcrypt.compareSync(currentPassword, user.hashedpw);

  if (!isCorrect) {
    throw new Error('La contraseña actual es incorrecta.');
  }

  return true;
};

const userProfileValidationRules = () => {
  return [
    // Agrega una regla de validación personalizada para la contraseña actual
    body('currentPassword')
      .custom(checkCurrentPassword)
      .withMessage('La contraseña actual es incorrecta.'),

    // Validación del correo electrónico
    body('email')
      .isEmail().withMessage('Ingrese un correo electrónico válido.')
      .custom(async (email, { req }) => {
        const userId = req.params.id;
        const user = await User.findOne({ where: { email } });

        if (user && user.id !== userId) {
          throw new Error('Este correo electrónico ya está registrado.');
        }

        return true;
      }),
  ];
};

module.exports = {
  userProfileValidationRules
};