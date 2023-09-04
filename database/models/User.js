module.exports = (sequelize, DataType) => {
	const alias = "User";
	const cols = {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
		},
		first_name: {
			type: DataType.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataType.STRING,
			allowNull: false,
		},
		profileImg: {
			type: DataType.STRING,
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
		},

		hashedpw: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
		},
		admin: {
			type: DataType.BOOLEAN,
		},
		uuid_id: {
			type: DataType.STRING,
		},
	};
	const config = {
		tableName: "users",
		timestamps: false,
	};

	const User = sequelize.define(alias, cols, config);

	return User;
};
