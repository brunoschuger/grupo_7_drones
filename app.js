const express = require("express");
const app = express();
const path = require("path");
<<<<<<< HEAD
=======

>>>>>>> cdbf61c5772bb7a70026ad0cf92adaa04f0b7fb3
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/product-detail", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/productdetail.html"));
});

app.get("/shopping-cart", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/shoppingcart.html"));
});

app.listen(3050, () => {
	console.log("Escuchando en el servidor 3050");
});
