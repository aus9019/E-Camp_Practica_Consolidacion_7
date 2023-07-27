module.exports = (sequelize, DataTypes) => {

  //* ATRIBUTOS del Bootcamp:
  const Bootcamp = sequelize.define('bootcamp', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 5,
        max: 20, //* El Drilling pide como máximo 10, pero eso no es posible ya que existe un Bootcamp con 'cue' 18, por lo que es mejor dejarlo en 20.
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  })
  return Bootcamp;
}