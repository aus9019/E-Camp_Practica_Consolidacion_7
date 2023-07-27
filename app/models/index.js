const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

//* Creando la Instancia con la configuración de la Conexión de la Base de Datos:
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model')(sequelize, Sequelize);
db.bootcamps = require('./bootcamp.model')(sequelize, Sequelize);

//* Definiendo las relaciones entre los Modelos de los Usuarios y Bootcamps:
db.users.belongsToMany(db.bootcamps, {
  through: "user_bootcamp", as: "bootcamps", foreignKey: "user_id",
});
db.bootcamps.belongsToMany(db.users, {
  through: "user_bootcamp", as: "users", foreignKey: "bootcamp_id",
});

module.exports = db;