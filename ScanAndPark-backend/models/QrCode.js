import Sequelize from 'sequelize';

const QrCode = sequelize.define("qr-codes", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  parkingId: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  type: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	},
  data: {
		type: Sequelize.BLOB('long')
	}
});

export default QrCode;