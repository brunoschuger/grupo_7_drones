document.addEventListener("DOMContentLoaded", () => {
	const buscador = document.getElementById("buscador");

	buscador.addEventListener("keyup", () => {
		const searchText = buscador.value.toLowerCase();

		const productos = document.querySelectorAll(
			".ofertas-home .tarjeta-prod"
		);

		productos.forEach((producto) => {
			const nombre = producto
				.querySelector("h1")
				.textContent.toLowerCase();

			if (nombre.includes(searchText)) {
				producto.style.display = "block";
			} else {
				producto.style.display = "none";
			}
		});
	});
});
