import random from 'random';
// const random = require('random') => Common JS, la opcion de arriba se llama module. En caso de usar module tengo
// que agregar al package.json type: module

let numerosAleatorios = new Map();

for (let i = 0; i < 1000; i++) {
    let numeroRandom = random.int(1, 20);
    if(numerosAleatorios.has(numeroRandom)){
        numerosAleatorios.set(numeroRandom, numerosAleatorios.get(numeroRandom) + 1)
    }else{
        numerosAleatorios.set(numeroRandom, 1)
    }
    
}

console.log(numerosAleatorios)


