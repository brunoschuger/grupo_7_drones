module.exports = (sequelize, DataType) => {

    const alias = "Category"
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
        id_mother_category: {
            type: DataType.INEGER,
            allowNull: true,  // lo aclaramos aunque no haga falta para hacer incapie en las categorias "madre" que seran null en esta columna
        }
    }
    
    const config = {
        tableName: 'categories',
        timestamps: false 
    }

    const Category = sequelize.define(alias, cols, config);
    return Category

}