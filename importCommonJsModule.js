let arithmetic = require("./exportCommonJsModule");

console.log(arithmetic.add(1,2));
console.log(arithmetic.minus(10,2));
console.log(arithmetic.multiply(11,12));
console.log(arithmetic.divide(10,2));


let Square = require("./Square");
let square1 = new Square(4);
console.log('Area 1 : ' + square1.area());
console.log('Perimeter 1: ' + square1.perimeter());
let square2 = new Square(5);
console.log('Area 2 : ' + square2.area());
console.log('Perimeter 2: ' + square2.perimeter());


