const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");
console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        console.log(desc);
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas._listado);
        break;
      default:
        break;
    }
    await pause();

    /* if (opt == "0") {
      opt2 = await pause();
      if (!opt2) {
        opt = 1;
      }
    } */
  } while (opt !== "0");
};

main();
