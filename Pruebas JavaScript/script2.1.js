document.write("Ejercicio 1<br>");
//Ejercicio 1

function numVocales(frase){

const VOCALES = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var contador = 0;

for(let i = 0 ; i < frase.length ; i++){//recorre la frase introducida y la compara con cada posicion del array de vocales
    for(let j = 0 ; j<VOCALES.length;j++){
        if(frase[i] === VOCALES[j]){
            contador++;
        }
    }
}
document.write("La frase tiene "+ contador + " vocales.");
}

numVocales("esto es una frase de prueba.");



document.write("<br> Ejercicio 2 <br>");
//Ejercicio 2

function ordenarArray(array){
      
    document.write(array.sort((a, b) => a - b));
}
ordenarArray([5,4,3,7,9,1]);



document.write("<br> Ejercicio 3 <br>");
//Ejercicio 3


function sumarNumeros(numeros){
     var numerosDivididos = numeros.toString().split('');
     var contador = 0;
     for(let i=0; i < numerosDivididos.length ; i++){
        contador += parseInt(numerosDivididos[i]);
     }
     document.write(contador);
}
sumarNumeros(123456);

document.write("<br> Ejercicio 4 <br>");
//Ejercicio 4

function numeroInverso(numero) {
numeroCadena = numero.toString().split("").reverse().join("")
return parseInt(numeroCadena);
}

document.write("<br> Ejercicio 5 <br>");
//Ejercicio 5

function sumaNumeros(numero){
    let suma= 0;
    for(let i = 0 ; i <= numero ; i++){
        suma += i;
    }
}

document.write("<br> Ejercicio 6 <br>");
//Ejercicio 6

function numeroMasRepetido(array){
    for(let i = 0; i < array.length; i++){
        
    }
}

document.write("<br> Ejercicio 7 <br>");
//Ejercicio 7

function diaSemana(numero){
let semana = ["No es un numero válido", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
return semana[numero];

}

document.write("<br> Ejercicio 8 <br>");
//Ejercicio 8


function calcularDigitosArray(array){
    let resultadoArray = [];

    for(let i = 0 ; i < array.length; i++){
        let numero = array[i];
        let digitos = numero.toString().length;
        resultadoArray[i]= digitos;
    }
return resultadoArray;
}