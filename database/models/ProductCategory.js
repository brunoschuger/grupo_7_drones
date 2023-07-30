module.exports = (sequelize, DataType) => {
// tabla intermedia, dos claves foraneas 
    const alias = "ProductCategory"
    const cols = {
        id_product: {
            type: DataType.INTEGER,
        },
        id_category: {
            type: DataType.INTEGER,

        }
    }
    
    const config = {
        tableName: 'product_category',
        timestamps: false,
    }

    const ProductCategory = sequelize.define(alias, cols, config);
    

    return ProductCategory

}