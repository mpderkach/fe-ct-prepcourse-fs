



//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
let miFuncion = "Hola Mundo";
console.log("Hola mundo tiene " + miFuncion.length + " numeros de caracteres");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let mensaje1 = "Hola Mundo";
let mensaje2 = mensaje1.slice(0,4);
console.log(mensaje2);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let mensajeASeparar = "Hola que tal";
let separador = "/"
let mensajeSeparado = mensajeASeparar.split();
console.log(mensajeSeparado);

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
