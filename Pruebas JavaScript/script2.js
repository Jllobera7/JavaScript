//Ejercicio 1
document.write("Ejercicio 1 <br>");

function contarPalabras(texto) {
let palabras = texto.split(" ");
return palabras.length;
}
let frase=prompt("Introduce una frase para contar sus palabras: ")
document.write("la frase tiene "+contarPalabras(frase)+" palabras.")

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