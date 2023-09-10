document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("buscador");
    const resultadosBusqueda = document.getElementById("resultados-busqueda");
    const ofertasSection = document.querySelector(".ofertas-home");
    resultadosBusqueda.style.display = "none";
        
    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();

        // Limpia los resultados de búsqueda anteriores
        resultadosBusqueda.innerHTML = "";

         if (searchTerm.trim() === "") {
          // Si la barra de búsqueda está vacía, muestra las tarjetas de oferta
          resultadosBusqueda.style.display = "none";
        }else{
            resultadosBusqueda.style.display = "block"
        }
        // filter + include para obtener resultados
        const matchingProducts = productList.filter((producto) =>
            producto.name.toLowerCase().includes(searchTerm)
        );

        if (matchingProducts.length > 0) {
            matchingProducts.forEach((producto) => {
                const resultItem = document.createElement("div");
                resultItem.innerHTML = `<a href="/products/${producto.id}/productDetail/">${producto.name}</a>`;
                resultadosBusqueda.appendChild(resultItem);
            });
        } else {
            resultadosBusqueda.innerHTML = "No se encontraron resultados.";
        }
    })
})