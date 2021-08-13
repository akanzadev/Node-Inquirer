const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");
require("colors");
console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDb = leerDB();
  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarTareasCompletadas(true);
        break;
      case "4":
        tareas.listarTareasCompletadas(false);
        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);
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
