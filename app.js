const express = require("express");
const path = require("path");

const mainRoutes = require ('./routes/mainRoutes');
const productRoutes = require ('./routes/productRoutes');
const userRoutes = require ('./routes/userRoutes');
const app = express();
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.set('views', [
	path.join(__dirname, './views/home'),
	path.join(__dirname, './views/products'),
	path.join(__dirname, './views/users'),
]);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); /* recomendacion de nacho djarlo en true */
app.use(express.json());
app.use(methodOverride('_method'));

/* ---- routers siempre abajo de todo en los use ---- */
app.use(mainRoutes);
app.use('/products',productRoutes);
app.use('/users', userRoutes)


app.listen(3050, () => {
	console.log("Escuchando en el servidor 3050");
}); 


