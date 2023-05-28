const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        res.render('index', {
            title: "7 Drones - Eleva tu visión",
            logoRoute: "images/logo-7drones.svg"
        });
    },

    getLogin: (req, res) => {
        res.render('login', {
            title: "7 Drones - Login",
            logoRoute: "images/logo-7drones.svg"
        });
    },

    getRegister: (req, res) => {
        res.render('register', {
            title: "7 Drones - Registrate",
            logoRoute: "images/logo-7drones.svg"
        });
    },
    getCart: (req, res) => {
        res.render('shoppingcart', {
            title: "Carrito de compras",
            logoRoute: "images/logo-7drones.svg"
        });
    }

}

module.exports = controllers;