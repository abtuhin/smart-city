'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      slotId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      status: {
        type: Sequelize.ENUM("RUNNING", "FREE", "FINISHED"),
        defaultValue: "FREE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookings");
  }
};
