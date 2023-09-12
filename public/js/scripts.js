console.log('Estoy en un archivo dentro de public/js');

function productosEnElCarrito() {
    if (localStorage.carrito) {
      return JSON.parse(localStorage.carrito).length;
    } else {
      return 0;
    }
  }



const productos = document.querySelectorAll(".agregar-carrito");

const cartNumber = document.querySelector(".cart-number");
cartNumber.innerText = productosEnElCarrito();


productos.forEach((producto) => {
    producto.addEventListener("click", function (e) {
      if (localStorage.carrito) {
        let carrito = JSON.parse(localStorage.carrito);
        let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
        if (index != -1) {
          carrito[index].quantity = carrito[index].quantity + 1;
        } else {
          carrito.push({ id: e.target.dataset.id, quantity: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        localStorage.setItem(
          "carrito",
          JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
        );
      }
      cartNumber.innerText = productosEnElCarrito();
      toastr.success("Se agregó este producto al carrito");
    });
 
});




  window.addEventListener("load", function () {
    /*  Animations initialization */
    new WOW().init();
  
    /* Toastr Initialization */
    toastr.options = {
      positionClass: "toast-bottom-right",
      fadeIn: 300,
      fadeOut: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
    };
  });

  window.addEventListener("load", function () {
    /*  Animations initialization */
    new WOW().init();
  
    /* Toastr Initialization */
    toastr.options = {
      positionClass: "toast-bottom-right",
      fadeIn: 300,
      fadeOut: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
    };
  });