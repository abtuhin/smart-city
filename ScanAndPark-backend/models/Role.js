import Sequelize from 'sequelize';

const Role = sequelize.define("role", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.ENUM("ADMIN", "USER", "RESIDENTIAL"),
    unique: true
  },
  description: {
    type: Sequelize.STRING(300)
  }
});

Role.associate = (models) => {
  Role.belongsToMany(models.User, {
    through: "UserRole",
    foreignKey: {
      name: 'roleId',
      allowNull: false
    },
    as: 'users'
  });
};


export default Role;