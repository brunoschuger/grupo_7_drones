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
    return Brand

}