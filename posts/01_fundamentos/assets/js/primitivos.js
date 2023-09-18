// let nombre = 'peter parker';
// console.log(nombre);

// let array = [
//     'hola',
//     [1, 2, 3],
// ];
// console.log(array);

// let estructura = {
//     nombre: 'nico',
//     edad: 21,
// };
// console.log(estructura);

// const entriesPares = Object.entries(estructura);
// console.log(entriesPares);
// // console.log({ estructura });

// // let getAleatorio = () => Math.random();
// console.log(getAleatorio() * 10);

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona2('nico', 'bustos');
console.log({ persona });
if (condition) {

}
//calculate scuare root
function scuareRoot(a, b) {
    return Math.sqrt(a * b);
}
console.log(scuareRoot(10, 20));

//verify integer argument

function verifyIntegerArgument(argument) {
    if (typeof argument !== 'number') {
        return false;
    }
}