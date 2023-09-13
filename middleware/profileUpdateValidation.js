const expressValidator = require('express-validator');
const { User } = require("../database/models");


const validacionEdit = 
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
  })



module.exports = validacionEdit