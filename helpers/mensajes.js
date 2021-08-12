require("colors");

const mostarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una opción  ".bgBlue.black);
    console.log("==========================\n".green);

    console.log(`${"1.".green} Crear Tarea`.green);
    console.log(`${"2.".green} Listar Tareas`.green);
    console.log(`${"3.".green} Listar Tareas Completadas`.green);
    console.log(`${"4.".green} Listar Tareas Pendientes`.green);
    console.log(`${"5.".green} Completar Tarea(s)`.green);
    console.log(`${"6.".green} Borrar Tarea`.green);
    console.log(`${"0.".green} Salir\n`.green);
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Presione ${"ENTER".green} para continuar\n`, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

module.exports = {
  mostarMenu,
  pausa,
};
