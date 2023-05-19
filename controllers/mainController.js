const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        res.render('index');
    },

    getLogin: (req, res) => {
        res.render('login');
    },

    getRegister: (req, res) => {
        res.render('register');
    },


}

module.exports = controllers;