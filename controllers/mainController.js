const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        res.render('index', {
            title: "7 Drones - Eleva tu visión"
        });
    },

    getLogin: (req, res) => {
        res.render('login', {
            title: "7 Drones - Login"
        });
    },

    getRegister: (req, res) => {
        res.render('register', {
            title: "7 Drones - Registrate"
        });
    },
    getCart: (req, res) => {
        res.render('shoppingcart', {
            title: "Carrito de compras"
        });
    }

}

module.exports = controllers;