//Boton que escriba en el DOM el cuadrado de un numero con una funcion y return
function cuadrado(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let mostrar = document.getElementById("cuadrado")
    //return alert(Math.pow (num1, 2))
    return mostrar.innerHTML = Math.pow(num1, 2)
}

//Un while que imprima el numero 1 y al llegar al 20 se rompa o termine ciclo
function ciclo(){
  let i = 0
  let ciclo = document.getElementById("ciclo")
  let mostrar
    while (i < 20){
        //console.log(i)
        mostrar = "<p>" + i + "</p>"
        ciclo.innerHTML += mostrar
        i++
    }
}

//Escribir en pantalla la tabla del 2
function tabla2(){
    //let contador = 1
    let tabla;
    let mostrar = document.getElementById("tabla2")
    for (let i = 1; i < 11 ; i++) {
       //document.write(contador + " * 2 = " + (contador * 2) + "<br>") ;
        tabla = "<p>" + `2 * ${i} = ${2 * i}` + "<p>"
        mostrar.innerHTML += tabla
       //contador++;
    }
}

//Utilizar un switch, para que diga que dia de la semana es cierto numero que escriba en un alert
function diasemana(){
    let dia = parseInt(document.getElementById("dia").value)
    let mostrar = document.getElementById("diaSemana")
    switch (dia) { 
        case 1 :
          //alert("El numero que escribiste es Lunes");
          mostrar.innerHTML = "El numero que escribiste es Lunes"
          break;
        case 2 :
          //alert("El numero que escribiste es Martes");
          mostrar.innerHTML = "El numero que escribiste es Martes"
          break;
        case 3 :
          //alert("El numero que escribiste es Miercoles");
          mostrar.innerHTML = "El numero que escribiste es Miercoles"
          break;
        case 4 :
          //alert("El numero que escribiste es Jueves");
          mostrar.innerHTML = "El numero que escribiste es Jueves"
          break;
        case 5 :
          //alert("El numero que escribiste es Viernes");
          mostrar.innerHTML = "El numero que escribiste es Viernes"
          break;
        case 6 :
          //alert("El numero que escribiste es Sabado");
          mostrar.innerHTML = "El numero que escribiste es Sabado"
          break;
        case 7 :
          //alert("El numero que escribiste es Domingo");
          mostrar.innerHTML = "El numero que escribiste es Domingo"
          break;
          default:
            //alert("Esta fuera del rango");
            mostrar.innerHTML = ("Esta fuera del rango")
    }

}

//Leer un input (tipo texto) y que el usuario ponga nombres y escriba en pantalla en una lista desordenada (ul)
function Insert(){
    let nombre = document.getElementById("nombre").value
    let espacio = "<li>" + nombre + "</li>"
    let lista = document.getElementById("listanombres")

    lista.innerHTML += espacio
}

//Boton que genera una lista de 10 numeros aleatorios en un select vacio

function numerosAleatorios(){
  let numero;
  let mostrar = document.getElementById("select");

  for (let i = 0; i <= 10; i++) {
    numero = Math.floor(Math.random() * 100)
    mostrar.innerHTML += "<option>" + numero + "</option>"
  }
}