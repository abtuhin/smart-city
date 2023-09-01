'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
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
      status: {
        type: Sequelize.ENUM("VERIFIED", "PENDING", "REJECTED", "BLOCKED"),
        defaultValue: "PENDING"
      },
      residentialRequest: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  }
};
