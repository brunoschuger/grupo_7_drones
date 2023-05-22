const path = require('path');

const controllers = {
    getProductDetail: (req, res) => {
        res.render('productdetail');
    },

    getProductFilmaciones: (req, res) => {
        res.render('productdetail-filmaciones');
    },

    geProductCursos: (req, res) => {
        res.render('productdetail-cursos');
    },

    getProductTecnico: (req, res) => {
        res.render('productdetail-serviciotecnico');
    },
    getProductAccesorios: (req, res) => {
        res.render('productdetail-accesorios');
    },
    getProductDrones: (req, res) => {
        res.render('productdetail-drones')
}
}


module.exports = controllers;