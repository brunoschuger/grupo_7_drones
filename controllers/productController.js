const path = require('path');

const controllers = {
    getProductDetail: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail.html'));
    },

    getProductFilmaciones: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail-filmaciones.html'));
    },

    geProductCursos: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail-cursos.html'));
    },

    getProductTecnico: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail-serviciotecnico.html'));
    },
    getProductAccesorios: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail-accesorios.html'));
    },
    getProductDrones: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/products/productdetail-drones.html'));
    },
}



module.exports = controllers;