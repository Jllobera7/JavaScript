//Ejercicio 1
document.write("Ejercicio 1 <br>");

function contarPalabras(texto) {
let palabras = texto.split(" ");
return palabras.length;
}
let frase=prompt("Introduce una frase para contar sus palabras: ")
document.write("la frase tiene "+contarPalabras(frase)+" palabras.")

//Ejercicio 2
document.write("Ejercicio 2 <br>");
//Ejercicio 2
document.write("<br> Ejercicio 2 <br>");

function estrellitas() {

  var estrella= "*";

  for ( let i=0; i<5; i++){
    document.write(estrella + "<br>");
    estrella += "*";
  }
}
estrellitas();

//Ejercicio 3
document.write("<br> Ejercicio 3 <br>");
    var estrella="*";

for(let i =0 ; i<5; i++){
    document.write(estrella + "<br>");
    estrella = estrella + "*";
}
   
}
estrellitas();


//Ejercicio 3
document.write("Ejercicio 3 <br>");

function encontrarNumeroMenor() {
let numero1= parseInt(prompt("introduce el primer numero"));
let numero2= parseInt(prompt("introduce el segundo numero"));
let numero3= parseInt(prompt("introduce el tercer numero"));

let numeromenor=numero1;

if(numero2 < numeromenor){
   numeromenor = numero2;
}
else if(numero3 < numeromenor){
    numeromenor = numero3;
}

document.write("El numero mas pequeño es "+ numeromenor);
}
encontrarNumeroMenor();

//Ejercicio 4
document.write("<br>Ejercicio 4 <br>");

function mayusculasMinisculas(palabras){
    document.write(palabras.toLowerCase()+"<br>");
    document.write(palabras.toUpperCase());
}
mayusculasMinisculas("Hola buenas tardes.Que tal estás?");

//Ejercicio 5
document.write("<br>Ejercicio 5 <br>");

function factorial() {
    while (true) {
        let numerito = parseInt(prompt("Introduzca un número para obtener su factorial, para salir pulse '0' "));
        if (numerito === 0) {
            break;
        }
        let resultado = 1;
        for (let i = numerito; i >= 1; i--) {
            resultado *= i;
        }
        alert(`El factorial de ${numerito} es ${resultado}.`);
    }
}

