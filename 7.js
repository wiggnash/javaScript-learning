// floating point rounding off issue -> therefore we will use some math functions
// console.log(303.3 * 3); // 909.9000000000001

// // just taking the integer part from the floating point
// console.log(Math.trunc(303.3 * 3))
// console.log(Math.floor(303.3 * 3)) // same as trunc

// // just taking the integer part from the floating point
// // opp of floor : ceil -> getting a number which is higher than that of the floating number
// console.log(Math.ceil(303.3 * 3))

// // rounding off
// console.log(Math.round(303.5)) // >= 0.5

// console.log(Math.PI)
// console.log(Math.E)

//======== TYPES OF FUNCTIONS IN JS ================
//syntax : 1 : Function declaration
function funName(a,b) {
    console.log(a+b);
    return a+b;
}

// syntax : 2 : Function expression

let funcExp = function (a,b) {
    console.log(a+b);
    return a+b;
}

// syntax : 3 : Arrow functions

let arrowFunction = (a,b) => {
    console.log(a+b);
    return a+b;
}

// no parameter
let arrowFunctionPrint = () => {
    console.log("Printing something");
}

// with one variable
let arrowFunctionPrintVariable = a => {
    console.log("Printing A variable here: ",a);
}

// use as return statement
let returnArrowFunction = (a,b) => a+b;

