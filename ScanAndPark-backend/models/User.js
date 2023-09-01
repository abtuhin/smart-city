import Sequelize from 'sequelize';

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING(50),
    allowNull: false, 
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false, 
  },
  fullname: {
    type: Sequelize.STRING(100),
  },
  email: {
    type: Sequelize.STRING(300),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(300),
    allowNull:false
  },
  licenseNo: {
    type: Sequelize.STRING(300),
  },
  residentialRequest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: Sequelize.ENUM("VERIFIED", "PENDING", "REJECTED", "BLOCKED"),
    defaultValue: "PENDING"
  }
});

User.associate = (models) => {
  User.belongsTo(models.Parking, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'user'
  });
  User.belongsToMany(models.Role, {
    through: "UserRole",
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'roles',
  });
};

export default User;