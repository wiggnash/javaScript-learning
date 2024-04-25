let string = "Vigneshwar";
let array = ["Fire","Air","Water"];


// split is used for string -> array
// join is used for array ->

console.log("Splitting string with split() method without seperator: ",string.split());
console.log("Splitting string with split('') method : ",string.split(''));
console.log("Using .join( ) method : ",array.join());
console.log("Using .join('') method : ",array.join(''));
console.log("Using .join('-') method : ",array.join('-'));
console.log(string.split('').reverse().join(''));