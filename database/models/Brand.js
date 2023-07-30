module.exports = (sequelize, DataType) => {

    const alias = "Brand"
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
        }
    }
    
    const config = {
        tableName: 'brands',
        timestamps: false 
    }
    
    const Brand = sequelize.define(alias, cols, config);
    Brand.associate = (models) => {
        // Relación con la tabla 'products' (uno a muchos)
        Brand.hasMany(models.Product, { foreignKey: 'id_brand', as: 'products' });
    };
    return Brand

}