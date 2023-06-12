const fs = require('fs');
const path = require('path');

const model = {
    // Ruta del archivo JSON
    route: '../data/users.json',

    // Traer todos los usuarios
    findAll: function () {
        const usersJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');

        const users = JSON.parse(usersJSON);

        return users;
    },

    // Traer un usuario según su ID
    findById: function (id) {
        const users = this.findAll();

        let searched = users.find(product => product.id === id);

        if (!searched) {
            searched = null;
        }

        return searched;
    },

    // Eliminar un usuario
    deleteById: function (id) {
        let users = this.findAll();

        users = users.filter(product => product.id !== id);

        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);

        return users;
    },

    // Editar un usuario
    updateById: function (id, newData) {
        // Buscamos el array de usuarios
        let users = this.findAll();

        // Con el findIndex, buscamos en qué indice del array de usuarios, está guardado el elemento buscado
        const indice = users.findIndex(usuarioActual => usuarioActual.id === id);

        // Actualizamos los datos del usuario que corresponda, con los datos que nos pasaron por parámetros
        users[indice].title = newData.title;
        users[indice].price = newData.price;

        // Convertimos nuestro array de JS a un array de JSON
        const usersJSON = JSON.stringify(users);

        // Guardamos este nuevo array de JSON en el archivo correspondiente
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);

        return users;
    },

    // Agregar un usuario nuevo
    createOne: function (newUser) {
        // Buscamos todos los usuarios
        let users = this.findAll();

        // Le damos el ID al usuario nuevo
        if (users.length > 0){
            newUser.id = users[users.length - 1].id + 1;
        } else{
            newUser.id = 0;
        }

        // Agregamos el usuario nuevo al array original
        users.push(newUser);

        // Convertimos a JSON el array
        const usersJSON = JSON.stringify(users);

        // Sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
    }
}

module.exports = model;