module.exports = (sequelize, DataType) => {

    const alias = "Product"
    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataType.DECIMAL(10, 2), // 10 dígitos en total, 2 decimales
            allowNull: false,
            validate: {
                isDecimal: true, // Asegura que el valor sea un número decimal válido
                min: 0
            }
        },
        oldPrice: {
            type: DataType.DECIMAL(10, 2)
        }, // precio tachado para mostrar en ofertas 
        description: {
            type: DataType.STRING(1000),
            allowNull: false
        },
        maxFlightTime: {
            type: DataType.INTEGER
        },
        maxTransmitionRange: {
            type: DataType.INTEGER
        },
        id_brand: {  // clave foranea, a una marca le puede pertenecer varios prod, a un prod solo 1 marca
            type: DataType.STRING
        },
        show: {
            type: DataType.BOOLEAN
        },
        sale: {
            type: DataType.BOOLEAN
        },
        img: {
            type: DataType.STRING
        },
        imgSale: {
            type: DataType.STRING
        }
    }
    
    const config = {
        tableName: 'products',
        timestamps: false 
    }

    const Product = sequelize.define(alias, cols, config);
    return Product

}