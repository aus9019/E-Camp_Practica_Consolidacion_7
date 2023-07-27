const bootcampController = require('./app/controllers/bootcamp.controller');
const userController = require('./app/controllers/user.controller');

//* Consultando el Bootcamp por ID, incluyendo los Usuarios:
async function queryBootcampById(bootcampId) {
  const bootcamp = await bootcampController.findById(bootcampId);
  console.log(JSON.stringify(bootcamp, null, 2));
  console.log(" == Consulta de Bootcamp por su ID e incluyendo a sus Usuarios Exitoso == \n")
}

//* Listar todos los Bootcamp con sus Usuarios:
async function queryAllBootcamps() {
  const bootcamps = await bootcampController.findAll();
  console.log(" Bootcamps: ", JSON.stringify(bootcamps, null, 2));
  console.log(" == Listado de todos los Bootcamps con sus Usuarios Exitoso == \n")
}

//* Consultando un Usuario por ID, incluyendo los Bootcamp:
async function queryUserById(userId) {
  const user = await userController.findUserById(userId);
  console.log(" usuario: ", JSON.stringify(user, null, 2));
  console.log(" == Consulta de Usuario por su ID e incluyendo los Bootcamps Exitoso == \n")
}

//* Listar los Usuarios con sus Bootcamp:
async function queryAllUsers() {
  const users = await userController.findAll();
  console.log(">> usuarios: ", JSON.stringify(users, null, 2));
  console.log(" == Listado de todos los Usuarios con sus Bootcamps Exitoso == \n")
}

//* Actualizar el Usuario según su ID:
async function updateUserById(userId, firstName, lastName) {
  await userController.updateUserById(userId, firstName, lastName);
  const user = await userController.findUserById(userId);
  console.log(" usuario: ", JSON.stringify(user, null, 2));
  console.log(" == Actualización de Usuario Exitosa == \n")
}

//* Eliminar un Usuario por ID:
async function deleteUserById(userId) {
  // const deletedUser = await userController.deleteUserById(userId);
  // console.log(" == Eliminación de Usuario Exitosa == \n")
}

queryBootcampById(2);
queryAllBootcamps();
queryUserById(3);
queryAllUsers();
updateUserById(1, "Alexis", "Ugalde");
// deleteUserById(3);
