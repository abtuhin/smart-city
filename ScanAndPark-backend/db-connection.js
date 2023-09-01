import Sequelize from 'sequelize';
import dbConfig from './config/config';

const conf = dbConfig.development;

const sequelize = new Sequelize(
  conf.database,
  conf.username,
  conf.password,
  {
    host: conf.host,
    dialect: "mysql",
    operatorsAliases: 0,
    logging: 0
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection setup successfully!");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
})();

export default sequelize;
global.sequelize = sequelize;