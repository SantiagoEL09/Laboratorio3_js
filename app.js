// Crear Tarea
function crear(){
    let nombre = document.getElementById("nombre_Tarea").value;
    let fecha = document.getElementById("fecha_Tarea").value;
    let hora = document.getElementById("hora_Tarea").value;
    let descripcion = document.getElementById("descripcion").value;

    localStorage.setItem("nombre_Tarea", nombre);
    localStorage.setItem("fecha_Tarea", fecha);
    localStorage.setItem("hora_Tarea", hora);
    localStorage.setItem("descripcion", descripcion);
}