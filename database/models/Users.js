module.exports = (sequelize, DataTypes) => {
	const alias = "users";
	const cols = {
		id_users: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		hashedpw: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		profileImg: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		admin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};
	const config = {
		tableName: "users",
		timestamps: false,
	};

	const Users = sequelize.define(alias, cols, config);
	return Users;
};
