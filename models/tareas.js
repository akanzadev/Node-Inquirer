const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((id) => {
      listado.push(this._listado[id]);
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    let listado = "";
    this.listadoArr.forEach((tarea, index) => {
      index++;
      if (tarea.completadoEn) {
        listado +=
          `${index}.`.green + ` ${tarea.desc} :: ${"Completada".green}\n`;
      } else {
        listado += `${index}.`.green + ` ${tarea.desc} :: ${"Pendiente".red}\n`;
      }
    });
    console.log(listado);
  }

  listarTareasCompletadas(completadas = true) {
    let index = 0;
    let listado = "";
    this.listadoArr.forEach((tarea) => {
      if (completadas && tarea.completadoEn) {
        index++;
        listado +=
          `${index}.`.green + ` ${tarea.desc} :: ${"Completada".green}\n`;
      } else if (!completadas && !tarea.completadoEn) {
        index++;
        listado += `${index}.`.green + ` ${tarea.desc} :: ${"Pendiente".red}\n`;
      }
    });
    console.log(listado);
  }
}

module.exports = Tareas;
