import {add, minus, multiply, divide} from "./exportES6Module.mjs";

console.log(add(1,2));
console.log(minus(10,2));
console.log(multiply(11,12));
console.log(divide(10,2));

import Player from "./exportDefaultES6Module.mjs";

let player = new Player('Thibaut', 'Elfroux');

console.log(player.getFullName());