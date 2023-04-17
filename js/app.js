let listaDeTareas = [];

let parrafoListaTareas = document.getElementById("parrafoListaTareas");

let formulario = document.getElementById("formTareas");
formulario.addEventListener("submit", agregarTareas);

function agregarTareas(e) {
  e.preventDefault();
  let nuevaTarea = document.getElementById("agregarTarea").value;
  listaDeTareas.push(nuevaTarea);
  formulario.reset();
  mostrarTareas();
}

function mostrarTareas() {
  if (listaDeTareas.length != 0) {
    parrafoListaTareas.className = "container text-light";
    parrafoListaTareas.innerHTML = `<ul>`;
    for (i = 0; i < listaDeTareas.length; i++) {
      parrafoListaTareas.innerHTML += `<li class="my-1">${listaDeTareas[i]}<button class="btn btn-danger mx-3" onclick="eliminarTarea(${i})">Quitar</button></li>`;
    }
    parrafoListaTareas.innerHTML += `<ul>`;
  }
}


function eliminarTarea(i) {
  listaDeTareas.splice(i, 1);
  mostrarTareas();
}
