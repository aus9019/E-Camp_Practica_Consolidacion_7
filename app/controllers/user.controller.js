const db = require('../models');
const Bootcamp = db.bootcamps;
const User = db.users;

//* Función para CREAR y GUARDAR (createUser) Usuarios:
const createUser = async (user) => {
  try {
    const createdUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    console.log("Usuario CREADO Exitosamente");
    return createdUser;
  } catch (err) {
    console.log("ERROR al CREAR el usuario:", err);
    throw err;
  }
};

//* Función para OBTENER (findUserById) los Bootcamps de un Usuario:
const findUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log("Usuario ENCONTRADO Exitosamente");
    return user;
  } catch (err) {
    console.log(`ERROR mientras se ENCONTRABA el usuario: ${err}`);
    throw err;
  }
};

//* Función para OBTENER (findAll) todos los Usuarios incluyendo los Bootcamp:
const findAll = async () => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log("Usuarios OBTENIDOS Exitosamente");
    return users;
  } catch (err) {
    console.log("ERROR al OBTENER los Usuarios:", err);
    throw err;
  }
};

//* Función para ACTUALIZAR (updateUserById) los Usuarios:
const updateUserById = async (userId, fName, lName) => {
  try {
    const updatedUser = await User.update(
      {
        firstName: fName,
        lastName: lName,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    console.log("Usuario ACTUALIZADO Exitosamente");
    return updatedUser;
  } catch (err) {
    console.log(`ERROR mientras se ACTUALIZABA el usuario: ${err}`);
    throw err;
  }
};

//* Función para ELIMINAR (deleteUserById) los Usuarios:
const deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: userId,
      },
    });
    console.log("Usuario ELIMINADO Exitosamente");
    return deletedUser;
  } catch (err) {
    console.log(`ERROR mientras se eliminaba el usuario: ${err}`);
    throw err;
  }
};

module.exports = {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
};