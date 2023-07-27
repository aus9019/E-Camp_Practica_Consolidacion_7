const db = require('./app/models')
const userController = require('./app/controllers/user.controller')
const bootcampController = require('./app/controllers/bootcamp.controller')

const run = async () => {

  //* CREANDO a los Usuarios:
  const user1 = await userController.createUser({
    firstName: 'Mateo',
    lastName: 'Díaz',
    email: 'mateo.diaz@correo.com',
  })

  const user2 = await userController.createUser({
    firstName: 'Santiago',
    lastName: 'Mejías',
    email: 'santiago.mejias@correo.com',
  })

  const user3 = await userController.createUser({
    firstName: 'Lucas',
    lastName: 'Rojas',
    email: 'lucas.rojas@correo.com',
  })

  const user4 = await userController.createUser({
    firstName: 'Facundo',
    lastName: 'Fernandez',
    email: 'facundo.fernandez@correo.com',
  })

  //* CREANDO los Bootcamps:
  const bootcamp1 = await bootcampController.createBootcamp({
    title: "Introduciendo El Bootcamp De React.",
    cue: 10,
    description: "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
  })

  const bootcamp2 = await bootcampController.createBootcamp({
    title: "Bootcamp Desarrollo Web Full Stack.",
    cue: 12,
    description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
  })

  const bootcamp3 = await bootcampController.createBootcamp({
    title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
    cue: 18,
    description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.",
  })

  //* AGREGANDO los Usuarios a los Bootcamps:
  await bootcampController.addUser(bootcamp1.id, user1.id);
  await bootcampController.addUser(bootcamp1.id, user2.id);
  await bootcampController.addUser(bootcamp2.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user2.id);
  await bootcampController.addUser(bootcamp3.id, user3.id);
  await bootcampController.addUser(bootcamp3.id, user4.id);
}

//* SINCRONIZANDO y RESTABLECIENDO la Base de Datos:
db.sequelize.sync({ force: true }).then(() => {
  run()
})
