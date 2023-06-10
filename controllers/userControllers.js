const path = require('path');
const userModel = require('../models/user');
const fs = require('fs');

const controllers = {


    getRegister: (req, res) => {
        res.render('register', {
            title: "7 Drones - Registrate",
            logoRoute: "../images/logo-7drones.svg"
        });
    },
    getCompleteUsers: (req, res) => {
        const users = userModel.findAll();
        res.render('completeUsers', {
            title: "Drones",
            users,
            logoRoute: "../images/logo-7drones.svg"
        });
    },
    registerUser: (req, res) => {
       let datos = req.body;
       console.log(req.body)
       userModel.createOne(datos); 
       res.redirect('/users/completeUsers')
    }

}
 

module.exports = controllers;