/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par
   // clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newArray = [];
   for(var clave in objeto){
      newArray.push([clave, objeto[clave]])
   }
   return newArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   let arrayDeLetras = string.split("")
   let objeto = {}
   arrayDeLetras = arrayDeLetras.sort() //ordenar las letras alfabeticamente
   arrayDeLetras.forEach (Letra => {
      if (objeto.hasOwnProperty(Letra)){
         objeto[Letra] += 1
      }else {
         objeto[Letra] = 1
      }
   });
   return objeto;
}

   //otra opcion:
   // var objeto = {};
   // for ( var i = 0; i < string.length; i++){
      // if(objeto.hasOwnProperty(string[i])){
         // objeto[string[i]] = objeto[string[i]] + 1; // o mas corto > objeto[string[i]] += 1
      // }else {
         // objeto[string[i]] = 1;
      // }
      // }
      // return objeto;


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = "";
   var minus = "";

   for(var i = 0; i < string.length; i ++){
      if(string[i] === string[i].toUpperCase()){  //pregunta si la palabra es Mayus -- sino .toLowerCase()
         mayus = mayus + string[i]      //"push" se usa solo para array
      } else{
         minus = minus + string[i]
      }
   }
   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   //op 1:
   // var arr = frase.split(" ");
   // var pInvertida = " ";
   // for (var i = frase.length-1 ; i >= 0 ; i -- ){
      // pInvertida += frase[i]
   // }
   // return pInvertida,

   //op 2:
   var invertida = frase.split(" ").map(function(elemento){ //"split" hace que el strean se convierta en array // "map" se aplica solo a array
      return elemento.split("").reverse().join("");        //"join" vuelva a convertir el array en un strean
   })
   return invertida.join(" ");

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numString = numero.toString(); //"236"
                  //"236" -> [2,3,6] . [6,3,2] . "632"
   var resultado = numString.split("").reverse().join("");

   if( numString === resultado){
      return "Es capicua"
   }else {
      return "No es capicua"
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var deleteAbc = " ";
   for(var i = 0; i < string.length; i++){
      if(string[i] === "a" || string[i] === "b" || string[i] === "c"){
         continue;
      }else{
         deleteAbc += string[i];
      }
   }
   return deleteAbc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var cambio = true; //al ser true se inicia el while
   while (cambio){
      cambio = false; //sino se hace un bucle infinito
   for( var i = 0 ; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i].length > arrayOfStrings[i+1].length){
         var aux = arrayOfStrings[i];
         arrayOfStrings[i+1] = arrayOfStrings[i];  //invertimos los lugares
         aux = arrayOfStrings [i+1];
         cambio = true;

      }
   }
}
   return arrayOfStrings
}
// otra opcion:

let aux;
for (var i = 0; i < arrayOfStrings.length-1; i++){
   for(var j = i+1; j < arrayOfStrings.length; j++){
      if(arrayOfStrings[i].length > arrayOfStrings[j].length){
         aux = arrayOfStrings[i]
         arrayOfStrings[i] = arrayOfStrings[j];
         arrayOfStrings[j] = aux;
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var coincidencias = [ ];
   for(var i = 0; i < array1.length; i++ ) {
      for (j = 0; j < array2.length; j++) {
         if( array1[i] === array2[j]){
            coincidencias.push(array1[i])
         }
      }
   } 

   return coincidencias;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
