const path = require('path');

let ofertas = [
    { id: 1, name: "Mavic Mini 2", img: '/images/img-drones-fondo-blanco/mavicmini2.jpg', oldPrice: 18000,  price: 15000 },
    { id: 2, name: "Mavic 3 PRO",  img: '/images/img-drones-fondo-blanco/mavic3.jpg', oldPrice: 25000, price: 20000 },
    { id: 3, name: "DJI Avata", img: '/images/img-drones-fondo-blanco/avata2.jpg', oldPrice: 40000, price: 30000 },
    { id: 4, name: "Phantom 4", img: '/images/img-drones-fondo-blanco/phantom4.jpg', oldPrice: 30000, price: 25000 },
]
const controllers = {
    getIndex: (req, res) => {
        res.render('index', {
            title: "7 Drones - Eleva tu visión",
            logoRoute: "images/logo-7drones.svg",
            ofertas,
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