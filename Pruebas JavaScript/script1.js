
document.write("Ejercicio 1" + "<br>");//Ejercicio 1

for(let i=10;i>0;i--){
    console.log(i);
    document.write(i+"<br>");
}

document.write("Ejercicio 2" + "<br>");//Ejercicio 2

var numero1 = parseInt(prompt("introduce el primer numero"));
var numero2 = Number(prompt("introduce el segundo numero"));

if (numero1>numero2)
    {console.log(numero1 + "<br>")
        document.write(numero1 + "<br>")
    }
else{console.log(numero2 + "<br>")
    document.write(numero2 + "<br>")
}
document.write("Ejercicio 3" + "<br>");//Ejercicio 3

console.log(numero1 + numero2 + "<br>")
document.write(numero1 + numero2 + "<br>")

document.write("Ejercicio 4" + "<br>");//Ejercicio 4

var nombre = prompt("introduze tu nombre")
var edad = parseInt(prompt("introduze tu edad"))
var estatura = parseFloat(prompt("introduze tu estatura"))
var estadocivil = prompt("estas soltero o casado?")

if(estadocivil == "casado"){
    console.log(nombre +", "+ edad+", " + estatura+"<br>")
    document.write(nombre +", "+ edad+", " + estatura+"<br>")
}
else if(estadocivil == "soltero"){
    console.log(nombre +"<br>"+ edad+"<br>" + estatura+"<br>")
    document.write(nombre +"<br>"+ edad+"<br>" + estatura+"<br>")
}

document.write("Ejercicio 5" + "<br>");//Ejercicio 5

var palabra = prompt("introduce una palabrita")
document.write("La palabra " + palabra + " tiene " + palabra.length + " letras."+"<br>")

document.write("Ejercicio 6" + "<br>");//Ejercicio 6

const MESES = ["Enero, ", "Febrero, ", "Marzo, ", "Abril, ", "Mayo, ", 
    "Junio, ", "Julio, ", "Agosto, ", "Septiembre, ", 
    "Octubre, ", "Noviembre, ", "Diciembre <br>"];
for(let i=0;i<MESES.length;i++){
    console.log(MESES[i]);
    document.write(MESES[i]);
}

document.write("Ejercicio 7" + "<br>");//Ejercicio 7

var nota= parseInt(prompt("Introduzca una nota :"));

if (nota >= 1 && nota <= 4) {
  console.log("La nota es un insuficiente.");
  document.write("La nota es un insuficiente.<br>");
} 
else if (nota === 5) {
  console.log("La nota es un suficiente.");
  document.write("La nota es un suficiente.<br>");
} 
else if (nota === 6) {
  console.log("La nota es un bien.");
  document.write("La nota es un bien.<br>");
} 
else if (nota === 7) {
  console.log("La nota es un notable bajo.");
  document.write("La nota es un notable bajo.<br>");
} 
else if (nota === 8) {
  console.log("La nota es un notable alto.");
  document.write("La nota es un notable alto.<br>");
} 
else if (nota === 9 || nota === 10) {
  console.log("La nota es un excelente.");
  document.write("La nota es un excelente.<br>");
} 
else {
  console.log("Por favor, introduzca una nota válida, del uno al 10.");
  document.write("Por favor, introduzca una nota válida, del uno al 10.<br>");
}

document.write("Ejercicio 8" + "<br>");//Ejercicio 8

var Numero=parseInt(prompt("Introduzca un numero :"));

if(Numero%2==0){
  console.log("El numero " + Numero+ " es par.");
  document.write("El numero " + Numero+ " es par." +"<br>");
}
else{
  console.log("El numero " + Numero+ " es impar.");
  document.write("El numero " + Numero +" es impar." +"<br>");
}

document.write("Ejercicio 9" + "<br>");//Ejercicio 9

var cadena=(prompt("Introduzca una palabra:" ));
cadena.split("");
var cadenaInvertida="";

for (let i =cadena.length -1; i>=0 ; i--){
cadenaInvertida+= cadena[i];
}
document.write(cadenaInvertida + "<br>")
console.log(cadenaInvertida + "<br>")

document.write("Ejercicio 10" + "<br>");//Ejercicio 10

var persona = {
  nombre:"juan",
  edad:26,
  telefono:123456789
};
document.write("nombre : "+ persona.nombre+ ", edad: "+persona.edad+", telefono: "+persona.telefono+".<br>")
console.log("nombre : "+ persona.nombre+ ", edad: "+persona.edad+", telefono: "+persona.telefono+".")
