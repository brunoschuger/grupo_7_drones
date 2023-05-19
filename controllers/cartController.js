const path = require('path');

const controllers = {
    getCart: (req, res) => {
        res.sendfile(path.join(__dirname, '../views/shoppingcart.html'));
    },


}

module.exports = controllers;