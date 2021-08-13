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
        name: `${"1.".green} Crear Tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar Tarea`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar Tareas Completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar Tareas Pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar Tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar Tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
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

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idxx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idxx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  });
  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idxx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idxx} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });
  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(preguntas);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  listadoTareasBorrar,
  leerInput,
  confirmar,
  mostrarListadoCheckList,
};
