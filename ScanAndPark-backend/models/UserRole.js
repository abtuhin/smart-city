'use strict';
import Sequelize from 'sequelize';

const UserRole = sequelize.define('users-roles', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users", 
      key: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "roles", 
      key: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }
});

UserRole.associate = (models) => {
  UserRole.belongsTo(models.User, { foreignKey: { name: 'userId', allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' });
  UserRole.belongsTo(models.Role, { foreignKey: { name: 'roleId', allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' });
}

export default UserRole;