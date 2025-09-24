// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar amigos:
function agregarAmigo(){
  //Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value;

  //Validar la entrada, si el campo este vacio mostrar un mensaje de error
  if (nombre === ""){
    alert("Por favor, inserte un nombre");
  }

  //Actualizar el array de amigos:
  amigos.push(nombre);

  //Limpiar el campo de entrada: 
  limpiarCaja();
}

function limpiarCaja(){
  document.querySelector("#amigo").value = "";
}


agregarAmigo()


function sortearAmigo(){

}