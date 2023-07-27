const db = require('../models');
const Bootcamp = db.bootcamps;
const User = db.users;

//* Función para CREAR y GUARDAR (createBootcamp) un nuevo Bootcamp:
const createBootcamp = async (bootcamp) => {
  try {
    const createdBootcamp = await Bootcamp.create({
      title: bootcamp.title,
      cue: bootcamp.cue,
      description: bootcamp.description,
    });
    console.log("Bootcamp CREADO Exitosamente");
    return createdBootcamp;
  } catch (err) {
    console.log("ERROR al CREAR el Bootcamp:", err);
    throw err;
  }
};

//* Función para AGREGAR (addUser) un Usuario al Bootcamp:
const addUser = async (bootcampId, userId) => {
  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if (!bootcamp) {
      console.log("No fue posible Encontrar el Bootcamp");
      return null;
    }
    const user = await User.findByPk(userId);
    if (!user) {
      console.log("No fue posible Encontrar el Usuario");
      return null;
    }
    await bootcamp.addUser(user);
    console.log("Usuario AGREGADO al Bootcamp Exitosamente");
    return bootcamp;
  } catch (err) {
    console.log("ERROR al AGREGAR el Usuario al Bootcamp", err);
    throw err;
  }
};

//* Función para OBTENER (findById) los Bootcamp por ID:
const findById = async (Id) => {
  try {
    const bootcamp = await Bootcamp.findByPk(Id, {
      include: [{
        model: User,
        as: "users",
        attributes: ["id", "firstName", "lastName"],
        through: {
          attributes: [],
        }
      }],
    });
    console.log("Bootcamp OBTENIDO Exitosamente");
    return bootcamp;
  } catch (err) {
    console.log(`ERROR al OBTENER el bootcamp: ${err}`);
    throw err;
  }
};

//* Función para OBTENER (findAll) los Usuarios junto a los Bootcamp:
const findAll = async () => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: [{
        model: User,
        as: "users",
        attributes: ["id", "firstName", "lastName"],
        through: {
          attributes: [],
        }
      }],
    });
    console.log("Bootcamps OBTENIDOS Exitosamente");
    return bootcamps;
  } catch (err) {
    console.log("ERROR al OBTENER los Bootcamps: ", err);
    throw err;
  }
};

module.exports = {
  createBootcamp,
  addUser,
  findById,
  findAll,
};