//EJERCICIO 1

const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const duplicarArr = arr.map( e => e*2)
console.log(duplicarArr);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const filtrarPares = arr.filter( e => e%2 === 0);
console.log(filtrarPares);

// utilizar el método reduce para sumar todos los elementos
// 21

const sumarArr = arr.reduce( (acc, el) => acc + el, 0);
console.log(sumarArr);

// EJERCICIO 2

