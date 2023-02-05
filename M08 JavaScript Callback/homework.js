/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var arr = nombre.split(" ") // separa cada una de las letras
   arr[0] = arr[0].toUpperCase() //Pone en Mayuscula la primer letra
   return arr.join("");          // devuelve el String unido 
}
function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()

}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2)
   
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumar = arrayOfNumbers.reduce(function(vAnterior, vActual){
      return vAnterior + vActual
   },0)
   cb(sumar)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(function(valor)){
      return cb (valor);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var newArray = array.map(function(i)){
      return cb(i);
   }
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // op 1 =  var PalabrasconA = arrayOfStrings.filter(arrayOfStrings => arrayOfStrings[0] = "a");
   //return PalabrasconA;

   //op 2
   // var newArray= [];
   // for( var i = 0; i < arrayOfStrings.length ; i ++) {
      // if( arrayOfStrings [0] === "a"){
         // newArray.push(arrayOfStrings[i]);
      // }
   // }
   // return newArray;

   //op 3
   var newArray = arrayOfStrings.filter(function(palabra)){
      return palabra[0] === "a"
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
