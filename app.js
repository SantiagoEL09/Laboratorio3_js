// Crear Tarea
function crear(){

    let nombre = document.getElementById("nombre_Tarea").value;
    let fecha = document.getElementById("fecha_Tarea").value;
    let hora = document.getElementById("hora_Tarea").value;
    let descripcion = document.getElementById("descripcion").value;
    let espacio = `-- ${nombre} --`;

    localStorage.setItem(`Tarea: ${nombre}`, nombre);
    localStorage.setItem(`Fecha: ${nombre}`, fecha);
    localStorage.setItem(`Hora: ${nombre}`, hora);
    localStorage.setItem(`Descripcion: ${nombre}`, descripcion);
    localStorage.setItem(`-- ${nombre} --`, espacio);

    limpiarCampo();
}

// Consultar Tarea
function consultar(){

    let nombre = document.getElementById("nombre_Tarea").value;

    let fecha = localStorage.getItem(`Fecha: ${nombre}`);
    let hora = localStorage.getItem(`Hora: ${nombre}`);
    let descripcion =localStorage.getItem(`Descripcion: ${nombre}`);

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

    localStorage.setItem(`Fecha: ${nombre}`, fecha);
    localStorage.setItem(`Hora: ${nombre}`, hora);
    localStorage.setItem(`Descripcion: ${nombre}`, descripcion);

    limpiarCampo();
}

// Eliminar Tarea
function eliminar(){

    let nombre = document.getElementById("nombre_Tarea").value;

    localStorage.removeItem(`Tarea: ${nombre}`);
    localStorage.removeItem(`Fecha: ${nombre}`);
    localStorage.removeItem(`Hora: ${nombre}`);
    localStorage.removeItem(`Descripcion: ${nombre}`);
    localStorage.removeItem(`-- ${nombre} --`);

    limpiarCampo();
}

function limpiarCampo(){
    document.getElementById("nombre_Tarea").value = "";
    document.getElementById("fecha_Tarea").value = "";
    document.getElementById("hora_Tarea").value = "";
    document.getElementById("descripcion").value = ""; 
}