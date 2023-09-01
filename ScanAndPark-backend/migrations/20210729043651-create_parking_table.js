'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("parkings", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      address: {
        type: Sequelize.STRING(50),
      },
      lattitude: {
        type: Sequelize.STRING(50),
      },
      longitude: {
        type: Sequelize.STRING(100),
      },
      qrCode: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true
      },
      status: {
        type: Sequelize.ENUM("OCCUPIED", "EMPTY"),
        defaultValue: "EMPTY"
      },
      userId: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'id',
        }
      },
      basePrice: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("parkings");
  }
};
