const {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
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
      case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Estás seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada con éxito");
          }
        }
        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);
    await pause();
  } while (opt !== "0");
};

main();
