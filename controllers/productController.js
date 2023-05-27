const path = require('path');

const controllers = {

    getProductFilmaciones: (req, res) => {
        res.render('productdetail-filmaciones');
    },

    geProductCursos: (req, res) => {
        res.render('productdetail-cursos');
    },

    getProductTecnico: (req, res) => {
        res.render('productdetail-serviciotecnico');
    },
    getProductAccesorios: (req, res) => {
        res.render('productdetail-accesorios');
    },
    getProductDrones: (req, res) => {
        const product = [{
            name: "Mavic Mini 2",
            description: "Gracias a su cámara de 12mp 4k y su tamaño compacto es el drone para tus momentos. El systema Occusync de trasmisión te brinda hasta 10km de alcance con transmisión HD libre de interferencias. Mini 2, tu compacta solución. Con solo unos toques en la pantalla disfruta de las tomas QuickShot, el Mini 2 hará todo por vos, videos profesionales para compartir con un toque en tus redes sociales.",
            img: '/images/mavic-mini-2.jpg',
            maxFlightTime: 31,
            maxTransmitionRange: 10,
            price: 15000
        }, {
            name: "Mavic 3 PRO", 
            description: "El DJI Mini 3 Pro de tamaño mini y megacapacidad es tan potente como portátil. Con un peso inferior a 249 g y con características de seguridad avanzados, no solo cumple con las normas, sino que también es el más seguro de su serie. Con un sensor de 1/1,3 pulgadas y características de primer nivel, redefine lo que significa volar Mini", 
            img: "/images/mavic3.jpg",
            maxFlightTime: 25,
            maxTransmitionRange: 8,
            price: 20000
        },
        {
            name: "DJI Avata", 
            description: "¡Rápido, dinámico, potente y divertido! El DJI Avata cuenta con todas las características de un drone FPV, pero también apto para interiores gracias a su tamaño reducido y los protectores para aspas. El cielo es tu patio de juegos cuando usas el DJI Avata, con su conexión con el Motion Controller y los Goggles podes pilotar el drone como si estuvieras dentro del cockpit! ¡El drone con perfecto balance entre la agilidad y la robustez! Siendo compacto y liviano, el DJI Avata es increíble en espacios apretados. Los protectores de aspas y motores, logran resistir golpes fuertes, frenando el drone y manteniéndolo estable. Encima de ser portable y liviano (410 gramos), con los DJI Goggles 2, podrás volar en primera persona como si estuvieses en la cabina de pilotaje para así pilotear el cielo en una experiencia como nunca antes. Además, con el DJI Motion Controller, podrás volar controlando el drone con un RC que simula el de un helicóptero! Ademas si sos un usuario experimentado y buscas precisión y movimientos avanzados esta versión cuenta con el FPV Remote Controller 2, para que puedas exprimir el DJI Avata al máximo en el modo Manual y conseguir tomas y experiencias únicas! Pero el alcance del DJI Avata no se queda ahí: Además de poder sacar fotos con 48 MP efectivos, ¡cuenta con una cámara increíble para grabar todo el contenido de tus aventuras! Sus características deslumbran dado su capacidad de filmación en 4K a 60 fps; sensor CMOS de 1/1,7 “; 105º FOV (rango de visión); Modo de Color D-Cinelike; EIS HorizonSteady y RockSteady 2.0 (estabilizador de imágenes). Gracias a su función D-Cinelike, con el DJI Avata podrás editar con mucha más simpleza los videos y fotografías que saques", 
            img: "/images/dji-avata.png",
            maxFlightTime: 22,
            maxTransmitionRange: 11,
            price: 10000
        }];

        res.render('productdetail-drones', {
             title: "Drones", 
             product, 
            });
    }
}


module.exports = controllers;