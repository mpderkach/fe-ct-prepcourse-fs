// // function crearGato(nombre, edad) {
// //     // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
// //     // Ambas propiedades deben tener el valor correspondiente recibido por pa
// //     // Además, agregar una propiedad con el nombre "meow".
// //     // La propiedad "meow" será una función que retorne el string: "Meow!".
// //     // Retornar el objeto.
// //     // Tu código:
// //     var crearGato = {
// //         nombre: nombre,
// //         edad: edad,
// //     }
// //     crearGato.meow= function(){
// //         return "Meow!"
// //     }
     

// //  return crearGato; 

// // }
// // console.log(crearGato())
// // console.log(crearGato.meow())

// // function nuevoUsuario(nombre, email, password) {
//     // // Debes crear un nuevo objeto.
//     // // Este debe tener las propiedades: "nombre", "email" y "password" con sus 
//     // // Retornar el objeto.
//     // // Tu código:
//     // var nuevoUsuario = {
//         // nombre: nombre,
//         // email: email,
//         // password:password,
//     // }
//     // return nuevoUsuario;
// // }
// // console.log(nuevoUsuario());

// // function agregarPropiedad(objeto, propiedad) {
//     // // Recibirás un objeto por parámetro.
//     // // Debes agregarle una propiedad con el nombre recibido por parámetro.
//     // // Esta propiedad será igual al valor `null`.
//     // // Retornar el objeto.
//     // // Tu código:

// //    agregarPropiedad.objeto = `null`
// //    return agregarPropiedad;
  
// // }
// // console.log(agregarPropiedad())

// // function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMis
//     // // Debes multiplicar este número por 5 y retornar el resultado.
//     // // Tu código:
//     // return objetoMisterioso.multiplicarNumeroDesconocidoPorCinco*5
// // }
// function agregarMetodoCalculoDescuento(objetoProducto) {
//     // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
//     // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentaje
//     // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
//     // Luego debes restar del precio total del producto ese valor de descuento.
//     // Retornar el precio final.
//     // Ejemplo:
//     // Precio ---> 10
//     // PorcentajeDeDescuento ---> 0.2
//     // Precio final ---> 8
//     // Tu código:
//     objetoProducto.calcularPrecioDescuento = function(precio, porcentajeDeDescuento){
//         return (${precio} - ${porcentajeDeDescuento}% = ${precio - (precio*porcentajeDeDescuento/100)})
//     }
// } 

// function numberOfCharacters(string) {
   // // La función recibe un string. Debes re
   // // letras del string, y su valor es la c
   // // Las letras deben estar en orden alfab
   // // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbaj
   // // Tu código:
   
   // let arrayDeLetras = string.split("")
   // let objeto = {}
   // arrayDeLetras = arrayDeLetras.sort()
   // arrayDeLetras.forEach (Letra => {
      // if (objeto.hasOwnProperty(Letra)){
         // objeto[Letra] += 1
      // // }else {
         // // objeto[Letra] = 1
      // // }
   // // });
   // // return objeto

// // } 
// //  console.log(numberOfCharacters(["adsjfdsfsfjsdjfhacabcsbajda"]))

// function capToFront(string) {
   // // Recibes un string con algunas letras en may
   // // Debes enviar todas las letras en mayúscula 
   // // Retornar el string.
   // // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // // Tu código:
   // var mayus = "";
   // var minus = "";

   // for(var i = 0; i < string.length; i ++){
      // if(string[i] === string[i].toUpperCase()){ 
         // mayus = mayus + string[i]      //"push" 
      // } else{
         // minus = minus + string[i]
      // }
   // }
   // return mayus + minus;
// }
// console.log(capToFront("soyHENRY"))

// function asAmirror(frase) {
   // // Recibes una frase. Tu tarea es retornar un nuevo 
   // // La diferencia es que cada palabra estará escrita 
   // // [EJEMPLO]: "The Henry Challenge is close!"  ---> 
   // // Tu código:
   // //op 1:
   // var invertida = frase.split(" ").map(function(elemento){ 
      // return elemento.split("").reverse().join("");        
   // })
   // return invertida.join(" ");
   
   
// }
// console.log(asAmirror("The Henry Challenge is close!"))

// function capicua(numero) {
   // // Si el número que recibes es capicúa debes retornar el
   // // Caso contrario: "No es capicua".
   // // Tu código:
   // var numString = numero.toString(); //"236"
                  // //"236" -> [2,3,6] . [6,3,2] . "632"
   // var resultado = numString.split("").reverse().join("");

   // if( numString === resultado){
      // return "Es capicua"
   // }else {
      // return "No es capicua"
   // }

// }
// console.log(capicua("323"))

// function buscoInterseccion(array1, array2) {
   // // Recibes dos arreglos de números.
   // // Debes retornar un nuevo arreglo en el que se g
   // // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // // Si no tienen elementos en común, retornar un a
   // // [PISTA]: los arreglos no necesariamente tienen
   // // Tu código:
   // var coincidencias = [ ];
   // for(var i = 0; i < array1.length; i++ ){
      // for (j = 0; j < array2.length; j++){
      //   if( array1[i] === array2[j]){
            // coincidencias.push(array1[i]);
         // }
      // }
   // } 
   // return coincidencias;
// }

// console.log(buscoInterseccion([4,2,3] , [1,3,4]));


// function sortArray(arrayOfStrings) {

// let aux;
// for (var i = 0; i < arrayOfStrings.length -1; i++){
   // for(var j = i+1; j < arrayOfStrings.length; j++){
      // if(arrayOfStrings[i].length > arrayOfStrings[j].length){
         // aux = arrayOfStrings[i];
         // arrayOfStrings[i] = arrayOfStrings[j];
         // arrayOfStrings[j] = aux;
      // }
   // }
   // return arrayOfStrings;
// }
// }
// console.log(sortArray(["asd","assddd","ad","a"]))

function sortArray(array){
   var aux;
   for(var i = 0; i < array.length -1; i++ ){
      for(var j = i+1; j < array.length ; j++ ){
         if(array[i].length > array[j].length){
            aux = array[i];
            array[i] = array[j];
            array[j] = aux;
         }
      }
      return array;
   }
}
console.log(sortArray(["asd","assddd","ad","a"]));