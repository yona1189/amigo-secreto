// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos un  arreglo para guardar todos los amigos que el usuario vaya ingresando en el juego
let listaAmigos = [];

//creamos un array para guardar los indices generados y asi evitar que los indices se repitan
let numIndiceAleatorio = [];
//Creamos la funcion para agregar un amigo al array

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  //validando que el campo nombre del amigo sea valido
  if (amigo == "" || amigo == null || amigo == undefined) {
    alert("Por favor ingrese el nombre de un amigo secreto");
  } else {
    //agregamos un amigo al arreglo
    listaAmigos.push(amigo);
    // limpiamos la caja de entrada de texto
    document.getElementById("amigo").value = "";
    //mostramos la lista de amigos
    mostrarAmigosCreados();
  }
}

//funcion para mostrar la lista de amigos en la pagina web
function mostrarAmigosCreados() {
  //apuntamos al espacio donde se muestra la lista
  let lista = document.getElementById("listaAmigos");
  //limpiamos la lista para evitar que se repitan sin control
  lista.innerHTML = "";

  for (let i = 0; i < listaAmigos.length; i++) {
    //Agregamos un nombre en cada iteracion segun la cantidad de incides del array "listaAmigos"
    lista.innerHTML += `<li> ${listaAmigos[i]} </li>`;
  }
}

//Se crea la funcion para sortear amigos de manera aleatoria
function sortearAmigo() {
  //apuntamos al espacio donde se muestra la lista
  let lista = document.getElementById("listaAmigos");
  //validamos que la lista de amigos tenga al menos dos elementos
  if (listaAmigos.length > 2) {
    //Verificamos que existan parejas en el juego
    if (listaAmigos.length % 2 === 0) { 
      //apuntamos al espacio donde se muestra la lista
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = `El amigo secreto es ${
        compararParejas(listaAmigos[-1])
      }`;
    } else {
      alert("Debes asegurarte de que el listado de amigos formen parejas");
    }
  } else {
    alert(
      "No es posible hacer el sorteo, se necesitan mas de 2 integrantes para jugar al amigo secreto"
    );
  }
}

//Se crea la funcion para generar parejas de manera aleatoria
function generarParejas() {
  //Creamos algunos elementos html para presentar la informacion
  const li_Elemento = document.createElement("li");
  const br_Elemento = document.createElement("br");
  //Título de la asignacion de parejas
  li_Elemento.textContent =
    "La signación de parejas queda de la siguiente manera:";
  //Inicializamos la lista de números aleatorios para que no genere errores en otra partida del juego
  numIndiceAleatorio = [];
  //apuntamos al espacio donde se muestra la lista
  let lista = document.getElementById("listaAmigos");
  //validamos que la lista de amigos tenga al menos dos elementos
  if (listaAmigos.length > 2) {
    //Verificamos que existan parejas en el juego
    if (listaAmigos.length % 2 === 0) {
      //mostramos como quedará el sorteo del amigo secreto

      //receteamos la lista para reescribir como quedaran asignadas
      lista.innerHTML = "";
      //agregamos contenido a las etiquetas html de presentacion de parejas
      lista.appendChild(li_Elemento);
      lista.appendChild(br_Elemento);
      //Por medio de un cicloi for, iteramos cada persona de la lista y le asignamos su pareja
      for (let i = 0; i < listaAmigos.length; i++) {
        //Se llama a la funcion comparar pareja, paque que agine una persona diferente a la que se listo inicialmente
        lista.innerHTML += `<li>  A ${
          listaAmigos[i]
        } le corresponde ${compararParejas(listaAmigos[i])} </li>`;
      }
    } else {
      alert("Debes asegurarte de que el listado de amigos formen parejas");
    }
  } else {
    alert(
      "No es posible hacer el sorteo, se necesitan mas de 2 integrantes pa jugar al amigo secreto"
    );
  }
  numIndiceAleatorio = [];
}

function compararParejas(nombre) {
  //seleccionamos  un nombre de la lista  de manera aleatoria por medio de la funcion generarIndiceAleatorio
  let nombreAleatrio = listaAmigos[generaIndiceAleatorio()];
  //por medio de un ciclo while buscamos una pareja que no se repita con en nombre original, seleccionando al azar otro nombre que sea diferente al de la lista a asignar
  while (nombre == nombreAleatrio) {
    numIndiceAleatorio = [];
    nombreAleatrio = listaAmigos[generaIndiceAleatorio()];
  }
  //retornamos el nombre opuesto al de la lista inicial
  return nombreAleatrio;
}

//con esta funcion generamos  numeros de indice aleatorio, los cuales nos van a servir para seleccionar un nombre aleatorio de la lista de los nombres del array listaAmigos
function generaIndiceAleatorio() {
  //Obtenemos un numero al azar de 0 a n cantidad de personas de la lista ejemplo 3 personas de 0,1,2 se omite el 3 por que se trabaja con arreglos con indices que empiezan en cero de lo contrario se suma un 1 al indice
  let indice = Math.floor(Math.random() * listaAmigos.length);
  //Esta funcion se ejecuta siempre y cuando el array NumIndiceAleatorio tenga una longitud menor al array de la lisa de amirgos, esto para evitar que la funcion cree numero aleatorios sin control
  if (numIndiceAleatorio.length < listaAmigos.length) {
    //Verificamos quye el numero aleatorio no haya sido creado antes, para evitar duplicados en numeros aleatorios ejemplo 3,3 ....
    if (!numIndiceAleatorio.includes(indice)) {
      //Si el numeroaleatorio no esta en la lista, quiere decir que es un numero aleatorio diferente, entonces lo agregamos al array: numIndiceAleatorio
      numIndiceAleatorio.push(indice);
      //retornamos el indice generado (numero aleatorio) correctamente
      return indice;
    } else {
      //si el numero se repite se  llama a la misma funcion y forzar a que genere un numero aleatorio diferente de los ya creados con aterioridad
      return generaIndiceAleatorio();
    }
  } else {
    //Mistraos los nombres dela lista
    mostrarAmigosCreados();
    //Receteamos la variable que recibe los numeros aleatorios
    numIndiceAleatorio = [];
    // Si ya se han generado todos los índices posibles, podrías devolver un valor especial o lanzar un error
    alert(
      "Ya se generaron todos los nombres de amigos secreto posibles\nSe generarán nuevamente"
    );
    
    
   
    //throw new Error("Todos los índices ya han sido generados.");
  }
}
