// lexical scope
// const globalVar = 5;
// function parent(){
//     const parentVariable = "Parent Variable";

//     function child(){
//         const childVariable = "Child variable";
//         console.log(childVariable);
//         console.log(parentVariable);
//         console.log(globalVar);
//     }
//     child();
// }

// parent()

// hoisting : variable and function declarations move to top of the scope even before code execution
// console.log(a); //undefined
// var a = 5;

// console.log(b); // error
// let b = 5;

// console.log(c); // error
// let c = 5;

//callback function

// function bikeRepair(functionCallLater) {
//     console.log("Fix gears");
//     console.log("Water wash");
//     console.log("Change lights");
//     console.log("Change engine oil");
//     functionCallLater();
// }

// function callOwner(){
//     console.log("bike is ready , please pickup")
// }

// bikeRepair(callOwner);

//closure

const globalVar = 5;
function grandParent() {
    function parent(){
        const parentVariable = "Parent Variable";
    
        function child(){
            const childVariable = "Child variable";
            console.log(childVariable);
            console.log(parentVariable);
            console.log(globalVar);
        }
        return child;
    }
    return parent;
}

const result = grandParent();
const finalResult = result();
finalResult();