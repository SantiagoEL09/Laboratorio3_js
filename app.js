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

// Consultar Tarea
function consultar(){
    let nombre = localStorage.getItem("nombre_Tarea");
    let fecha = localStorage.getItem("fecha_Tarea");
    let hora = localStorage.getItem("hora_Tarea");
    let descripcion =localStorage.getItem("descripcion");

    document.getElementById("nombre_Tarea").value = nombre;
    document.getElementById("fecha_Tarea").value = fecha;
    document.getElementById("hora_Tarea").value = hora;
    document.getElementById("descripcion").value = descripcion;    
}

// Actualizar Tarea
function actualizar(){
    let nombre = document.getElementById("nombre_Tarea").value;
    let fecha = document.getElementById("fecha_Tarea").value;
    let hora = document.getElementById("hora_Tarea").value;
    let descripcion = document.getElementById("descripcion").value;

    localStorage.setItem("nombre_Tarea", nombre);
    localStorage.setItem("fecha_Tarea", fecha);
    localStorage.setItem("hora_Tarea", hora);
    localStorage.setItem("descripcion", descripcion);
}

// Eliminar Tarea
function eliminar(){
    localStorage.removeItem("nombre_Tarea");
    localStorage.removeItem("fecha_Tarea");
    localStorage.removeItem("hora_Tarea");
    localStorage.removeItem("descripcion");
}