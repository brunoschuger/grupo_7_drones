-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-07-2023 a las 03:34:52
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `7drones`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `oldPrice`, `description`, `maxFlightTime`, `maxTransmitionRange`, `id_brand`, `show`, `sale`, `img`, `imgSale`) VALUES
(1, 'Mavic 3 PRO ', 20000.00, 25000.00, '\"El DJI Mini 3 Pro de tamaño mini y megacapacidad es tan potente como portátil. Con un peso inferior a 249 g y con características de seguridad avanzados, no solo cumple con las normas, sino que también es el más seguro de su serie. Con un sensor de 1/1,3 pulgadas y características de primer nivel, redefine lo que significa volar Mini', 25, 30, 4, 1, 1, '/images/uploads/1690151545717_mavic3.jpg', '/images/uploads/1690164660493_mavic3.jpg'),
(2, 'DJI Avata', 10000.00, 15000.00, '¡Rápido, dinámico, potente y divertido! El DJI Avata cuenta con todas las características de un drone FPV, pero también apto para interiores gracias a su tamaño reducido y los protectores para aspas. El cielo es tu patio de juegos cuando usas el DJI Avata, con su conexión con el Motion Controller y los Goggles podes pilotar el drone como si estuvieras dentro del cockpit! ¡El drone con perfecto balance entre la agilidad y la robustez! Siendo compacto y liviano, el DJI Avata es increíble en espacios apretados. Los protectores de aspas y motores, logran resistir golpes fuertes, frenando el drone y manteniéndolo estable. Encima de ser portable y liviano (410 gramos), con los DJI Goggles 2, podrás volar en primera persona como si estuvieses en la cabina de pilotaje para así pilotear el cielo en una experiencia como nunca antes. Además, con el DJI Motion Controller, podrás volar controlando el drone con un RC que simula el de un helicóptero! Ademas si sos un usuario experimentado y buscas precisión y movimientos avanzados esta versión cuenta con el FPV Remote Controller 2, para que puedas exprimir el DJI Avata al máximo en el modo Manual y conseguir tomas y experiencias únicas! Pero el alcance del DJI Avata no se queda ahí: Además de poder sacar fotos con 48 MP efectivos, ¡cuenta con una cámara increíble para grabar todo el contenido de tus aventuras! Sus características deslumbran dado su capacidad de filmación en 4K a 60 fps; sensor CMOS de 1/1,7 “; 105º FOV (rango de visión); Modo de Color D-Cinelike; EIS HorizonSteady y RockSteady 2.0 (estabilizador de imágenes). Gracias a su función D-Cinelike, con el DJI Avata podrás editar con mucha más simpleza los videos y fotografías que saques', 22, 15, 4, 1, 1, '/images/uploads/1690152044562_dji-avata.png', '/images/uploads/1690164856557_avata2.jpg'),
(3, 'Mavic Mini 2 ', 15000.00, 18000.00, 'descripcion generica mavic mini 2................................', 31, 26, 4, 1, 1, '/images/uploads/1690152664886_mavic-mini-2.jpg', '/images/uploads/1690164930439_mavicmini2.jpg'),
(4, 'CS KIT B DRONE ', 15000.00, NULL, 'Kit de drone. 4 Motores. 8 Helices. Base. Bateria Recargable. Aplicacion descargable CS Pilot. Control desde iOS / Android. Camara: 480p. Material: Plastico y metal.', 20, NULL, 1, NULL, NULL, '/images/uploads/1690152916842_bdrone-panacom.jpg', NULL),
(5, 'DRG 7022', 25000.00, 0.00, 'Cámaras duales HD y FPV Transmisión en tiempo real: este dron plegable está equipado con una cámara gran angular de 90° Full HD. Podrás ver las imágenes en detalle. Las lentes dobles y las perspectivas dobles hacen que la creación sea más libre.\r\n\r\nEl sistema FPV de transmisión Wi-Fi en tiempo real permite que el dron se conecte a tu teléfono móvil, la vista se mostrará directamente en tu teléfono móvil, para que puedas disfrutar del mundo por encima de 50-80 mts.\r\n\r\nFunción automática de evitación de obstáculos: esta es una función que no tienen todos los drones del mercado. Se realiza perfectamente para evitar obstáculos automáticos multidireccionales, lo que permite a los principiantes operar y aprender con facilidad. Reúne muchas tecnologías de vuelo avanzadas actuales, adopta una nueva generación de sistema de evitación de obstáculos multidireccional, ignora los obstáculos y hace que volar sea más libre de preocupaciones.\r\n\r\nFácil de operar y portátil para principiantes: este drone tiene la función de despegue con una tecla, retorno de una tecla y vuelo de punto fijo, lo que te permite comenzar fácilmente. Al mismo tiempo, está equipado con una funda de transporte, para que puedas llevar el drone a donde quieras ir en cualquier momento y en cualquier lugar. La bolsa de transporte contiene 1 drone, 1 mando a distancia, 2 baterías rápidas, 1 cable de carga, 1 destornillador, 1 manual, 4 cubiertas protectoras, 4 hélices de repuesto.\r\n\r\nMúltiples modos de vuelo para que cambies: Tiene una variedad de modos de vuelo para que elijas. Modo sin cabeza, modo automático de evitación de obstáculos, modo de control de velocidad de tres velocidades, funcionamiento de la aplicación, vuelo de punto fijo, despegue/aterrizaje con una tecla, volteo de 360 grados, control de voz y fotografía de gestos. Tantas características para satisfacer todas tus fantasías de drones.\r\n', 35, 30, 2, 1, NULL, '/images/uploads/1690153055532_DGR7022.png', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
