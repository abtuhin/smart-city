import Sequelize from 'sequelize';

const Booking = sequelize.define("bookings", {
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
  }
});

Booking.associate = (models) => {
  Booking.belongsTo(models.User);
  Booking.belongsTo(models.Parking);
};

export default Booking;