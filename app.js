// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos un  arreglo para guardar todos los amigos que el usuario vaya ingresando en el juego

//Creamos la funcion para agregar un amigo al array
const listaAmigos= [];
function agregarAmigo() {
   
    let amigo = document.getElementById('amigo').value;
    console.log (`Su amigo secreto es: ${amigo}`);

    //validando que el campo nombre del amigo sea valido
    if (amigo == "" || amigo == null || amigo == undefined) {
        alert("Por favor ingrese el nombre de un amigo secreto");
    }else {
        //agregamos un amigo al arreglo
listaAmigos.push(amigo);
document.getElementById('amigo').value = "";
console.log(listaAmigos);
    }
}

