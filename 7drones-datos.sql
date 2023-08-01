-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-08-2023 a las 01:51:38
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
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(6, 'Behorse'),
(4, 'DJI'),
(1, 'GADNIC'),
(2, 'PANACOM'),
(5, 'SunnyLife'),
(3, 'TOYSKY');

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `id_mother_category`) VALUES
(1, 'drones', NULL),
(2, 'accesorios', NULL),
(3, 'filtros', 2),
(4, 'helices', 2),
(5, 'bolsos_y_fundas', 2),
(6, 'pads', 2);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `oldPrice`, `description`, `maxFlightTime`, `maxTransmitionRange`, `id_brand`, `show`, `sale`, `img`, `imgSale`) VALUES
(1, 'Mavic 3 PRO ', 20000.00, 25000.00, '\"El DJI Mini 3 Pro de tamaño mini y megacapacidad es tan potente como portátil. Con un peso inferior a 249 g y con características de seguridad avanzados, no solo cumple con las normas, sino que también es el más seguro de su serie. Con un sensor de 1/1,3 pulgadas y características de primer nivel, redefine lo que significa volar Mini', 25, 30, 4, 1, 1, '/images/uploads/1690151545717_mavic3.jpg', '/images/uploads/1690164660493_mavic3.jpg'),
(2, 'DJI Avata', 10000.00, 15000.00, '¡Rápido, dinámico, potente y divertido! El DJI Avata cuenta con todas las características de un drone FPV, pero también apto para interiores gracias a su tamaño reducido y los protectores para aspas. El cielo es tu patio de juegos cuando usas el DJI Avata, con su conexión con el Motion Controller y los Goggles podes pilotar el drone como si estuvieras dentro del cockpit! ¡El drone con perfecto balance entre la agilidad y la robustez! Siendo compacto y liviano, el DJI Avata es increíble en espacios apretados. Los protectores de aspas y motores, logran resistir golpes fuertes, frenando el drone y manteniéndolo estable. Encima de ser portable y liviano (410 gramos), con los DJI Goggles 2, podrás volar en primera persona como si estuvieses en la cabina de pilotaje para así pilotear el cielo en una experiencia como nunca antes. Además, con el DJI Motion Controller, podrás volar controlando el drone con un RC que simula el de un helicóptero! Ademas si sos un usuario experimentado y buscas precisión y movimientos avanzados esta versión cuenta con el FPV Remote Controller 2, para que puedas exprimir el DJI Avata al máximo en el modo Manual y conseguir tomas y experiencias únicas! Pero el alcance del DJI Avata no se queda ahí: Además de poder sacar fotos con 48 MP efectivos, ¡cuenta con una cámara increíble para grabar todo el contenido de tus aventuras! Sus características deslumbran dado su capacidad de filmación en 4K a 60 fps; sensor CMOS de 1/1,7 “; 105º FOV (rango de visión); Modo de Color D-Cinelike; EIS HorizonSteady y RockSteady 2.0 (estabilizador de imágenes). Gracias a su función D-Cinelike, con el DJI Avata podrás editar con mucha más simpleza los videos y fotografías que saques', 22, 15, 4, 1, 1, '/images/uploads/1690152044562_dji-avata.png', '/images/uploads/1690164856557_avata2.jpg'),
(3, 'Mavic Mini 2 ', 15000.00, 18000.00, 'descripcion generica mavic mini 2................................', 31, 26, 4, 1, 1, '/images/uploads/1690152664886_mavic-mini-2.jpg', '/images/uploads/1690164930439_mavicmini2.jpg'),
(4, 'CS KIT B DRONE ', 15000.00, NULL, 'Kit de drone. 4 Motores. 8 Helices. Base. Bateria Recargable. Aplicacion descargable CS Pilot. Control desde iOS / Android. Camara: 480p. Material: Plastico y metal.', 20, NULL, 1, NULL, NULL, '/images/uploads/1690152916842_bdrone-panacom.jpg', NULL),
(5, 'DRG 7022', 25000.00, 0.00, 'Cámaras duales HD y FPV Transmisión en tiempo real: este dron plegable está equipado con una cámara gran angular de 90° Full HD. Podrás ver las imágenes en detalle. Las lentes dobles y las perspectivas dobles hacen que la creación sea más libre.\r\n\r\nEl sistema FPV de transmisión Wi-Fi en tiempo real permite que el dron se conecte a tu teléfono móvil, la vista se mostrará directamente en tu teléfono móvil, para que puedas disfrutar del mundo por encima de 50-80 mts.\r\n\r\nFunción automática de evitación de obstáculos: esta es una función que no tienen todos los drones del mercado. Se realiza perfectamente para evitar obstáculos automáticos multidireccionales, lo que permite a los principiantes operar y aprender con facilidad. Reúne muchas tecnologías de vuelo avanzadas actuales, adopta una nueva generación de sistema de evitación de obstáculos multidireccional, ignora los obstáculos y hace que volar sea más libre de preocupaciones.\r\n\r\nFácil de operar y portátil para principiantes: este drone tiene la función de despegue con una tecla, retorno de una tecla y vuelo de punto fijo, lo que te permite comenzar fácilmente. Al mismo tiempo, está equipado con una funda de transporte, para que puedas llevar el drone a donde quieras ir en cualquier momento y en cualquier lugar. La bolsa de transporte contiene 1 drone, 1 mando a distancia, 2 baterías rápidas, 1 cable de carga, 1 destornillador, 1 manual, 4 cubiertas protectoras, 4 hélices de repuesto.\r\n\r\nMúltiples modos de vuelo para que cambies: Tiene una variedad de modos de vuelo para que elijas. Modo sin cabeza, modo automático de evitación de obstáculos, modo de control de velocidad de tres velocidades, funcionamiento de la aplicación, vuelo de punto fijo, despegue/aterrizaje con una tecla, volteo de 360 grados, control de voz y fotografía de gestos. Tantas características para satisfacer todas tus fantasías de drones.\r\n', 35, 30, 2, 1, NULL, '/images/uploads/1690153055532_DGR7022.png', NULL),
(6, 'Mini Drone GADNIC', 56000.00, NULL, '¡Nuevo Mini Drone Gadnic Con Posicionamiento de Flujo Óptico!\r\n\r\nVídeo de alta calidad:\r\nLograrás tomas increíbles la camara. Graba vídeos y toma fotografías en calidad 4k FULL HD\r\n\r\nUso sencillo:\r\nManeja tu drone desde el control remoto, la función de despegue y aterrizaje con una sola tecla facilitan el vuelo y protegen tu dispositivo. Posee mapa de posicionamiento en tiempo real, planificación de ruta, control de aplicación de teléfono móvil\r\n\r\nTransmisión de imagen:\r\nDisfruta de las transmisión de imágenes a distancia en HD desde tu teléfono móvil. Los mejores paisajes al alcance de tu mano\r\n\r\n', 35, 25, 2, NULL, 0, '/images/uploads/1690671940010_3.png', '/images/img-drones-fondo-blanco/1690671940010_3.png'),
(7, 'Set 4 Filtros Nd Dji Mavic Mini - Mini 2 ', 20000.00, NULL, 'EL KIT INCLUYE LOS SIGUIENTES FILTROS : ND PL 4 / 8 / 16 / 32 (son polarizadores al mismo tiempo a diferencia de los que se ofrecen en el mercado. (Mucha mas calidad)', 0, 0, 5, NULL, 0, '/images/uploads/1690730936483_A1.png', '/images/img-drones-fondo-blanco/1690730936483_A1.png'),
(8, 'Pad de despliegue/aterrizaje', 5000.00, NULL, 'Pad de despegue, 55cm.\r\nViene con estacas y reflexivos para la vision,\r\ntambien incluye bolso para su trasporte contraído.\r\n Muy fácil y rapido de armar. \r\n', 0, 0, 4, NULL, 0, '/images/uploads/1690731667495_A2.png', '/images/img-drones-fondo-blanco/1690731667495_A2.png'),
(9, 'Helices + Protectores + Soportes', 7000.00, NULL, 'Helices, protector de helices, soporte de helices, pata extendida del tren de aterrizaje especialmente diseñado para dji mini 2/dji mini se.\r\nTamaño pequeño, peso ligero, facil de instalar y desmontar\r\nMateriales avanzados de proteccion del medio ambiente, no tendran ningun efecto negativo en el cuerpo del dron\r\n\r\n** El paquete incluye: 4 protectores de helices, 2 soportes de helices, 8 helices (1 mini destornillador y 12 tornillos), 1 pata extendida del tren de aterrizaje\r\n\r\n', 0, 0, 4, NULL, 0, '/images/uploads/1690732007913_A3.png', '/images/img-drones-fondo-blanco/1690732007913_A3.png'),
(10, 'Combo Hélices para Drone Gadnic Xp7', 3500.00, NULL, 'El set incluye dos pares de hélices especialmente diseñadas para tu Drone Gadnic Xp7\r\n\r\nSumá potencia y minimiza los ruidos de tu drone con el combo de hélices ultra livianas.\r\n\r\n', 0, 0, 2, NULL, 0, '/images/uploads/1690732270652_A4.png', '/images/img-drones-fondo-blanco/1690732270652_A4.png'),
(11, 'Bolso Original DJI Para Drone Mavic Air', 6500.00, NULL, 'El Bolso de transporte DJI es el compañero perfecto para transportar y proteger tu equipo de drones de forma segura y conveniente. Diseñado pensando en la comodidad y la funcionalidad, este bolso espacioso te permite llevar contigo todo lo que necesitas para tus aventuras aéreas.\r\n\r\nCon capacidad para baterías, un control y un drone, este bolso te brinda la flexibilidad necesaria para llevar tu equipo de DJI a cualquier lugar. Su diseño inteligente y compacto garantiza que todos los elementos estén organizados y protegidos, evitando posibles daños durante el transporte.\r\n\r\nCuenta con compartimentos acolchados y ajustables para adaptarse a tus necesidades específicas. Los materiales de alta calidad y resistentes al agua protegen tu equipo de condiciones adversas, permitiéndote explorar sin preocupaciones. \r\n\r\n', 0, 0, 4, NULL, 0, '/images/uploads/1690732356422_A5.png', '/images/img-drones-fondo-blanco/1690732356422_A5.png');

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id_product`, `id_category`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 2),
(7, 3),
(8, 6),
(8, 2),
(9, 4),
(9, 2),
(10, 4),
(10, 2),
(11, 5),
(11, 2);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `hashedpw`, `profileImg`, `email`, `admin`, `first_name`, `last_name`, `uuid_id`) VALUES
(1, 'bersita', '$2b$12$3BtLQ/TNEqTJRWGPOYUNSexrSIn6mq9KkaGpl14YmqBr7.bCmYOdW', '/images/uploads/profile-imgs/1690767910286_bersita.jpg', 'brunoschu@7drones.com.ar', 1, 'Bruno', 'Schuger', 'a5c14377-ae6d-4534-86a3-87ec2e47c4b8');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
