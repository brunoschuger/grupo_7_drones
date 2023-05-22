const express = require("express");
const path = require("path");

const mainRoutes = require ('./routes/mainRoutes');
const productRoutes = require ('./routes/productRoutes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', [
	path.join(__dirname, './views/home'),
	path.join(__dirname, './views/products'),
]);



app.use(mainRoutes);
app.use(productRoutes);
app.use(express.static('public'));

app.listen(3050, () => {
	console.log("Escuchando en el servidor 3050");
}); 


