const inquirer = require("inquirer");
require("colors");
const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `1. Crear Tarea`,
      },
      {
        value: "2",
        name: "2. Listar Tarea",
      },
      {
        value: "3",
        name: "3. Crear Tareas Completadas",
      },
      {
        value: "4",
        name: "4. Listar Tareas Pendientes",
      },
      {
        value: "5",
        name: "5. Completar Tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar Tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".green);
  console.log("   Seleccione una opción  ".bgBlue.black);
  console.log("==========================\n".green);
  const { opcion } = await inquirer.prompt(menuOpts);
  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length > 0) {
          return true;
        }
        return "Debe ingresar una descripción";
      },
    },
  ];
  console.log("\n");
  const { desc } = await inquirer.prompt(question);
  return desc;
};
/* const pauseOpt = [
  {
    type: "confirm",
    name: "opcionSalir",
    message: "Desea salir del programa?",
  },
];

const pause = async () => {
  console.clear();
  console.log("==========================".green);
  const { opcionSalir } = await inquirer.prompt(pauseOpt);
  return opcionSalir;
}; */

module.exports = {
  inquirerMenu,
  pause,
  leerInput,
};