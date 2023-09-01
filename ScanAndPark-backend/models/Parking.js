import Sequelize from 'sequelize';

const Parking = sequelize.define("parking", {
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
    defaultValue: "EMPTY",
  },
  basePrice: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0
  }
});

Parking.associate = (models) => {
  Parking.hasOne(models.User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'user'
  });
};

export default Parking;