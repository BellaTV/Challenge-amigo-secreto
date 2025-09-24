// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar amigos:
function agregarAmigo(){
  e.preventDefault()
  //Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  //Validar la entrada, si el campo este vacio mostrar un mensaje de error
  if (nombre === ""){
    alert("Por favor, inserte un nombre");
    return;
    }

  //Actualizar el array de amigos:
  amigos.push(nombre);

  //Limpiar el campo de entrada: 
  limpiarCaja();

  //mostrar lista actualizada
   mostrarLista();
}

function limpiarCaja(){
  document.querySelector("#amigo").value = "";
}

function mostrarLista(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML ="";

  for(let i = 0; i < amigos.length; i++){
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}



agregarAmigo()


function sortearAmigo(){

}