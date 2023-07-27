//* Configuración para la conexión con la Base de Datos:
module.exports = {
  USER: 'alexis',
  PASSWORD: '4321',
  DB: 'db_bootcamp',
  HOST: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
