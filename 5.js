// More about Arrays

// let arr = ["cricket","football","tennis","volleyball","basketball"];
// console.log(arr.includes("cricket"));
// console.log(arr.includes("cricket",2)); //start lookking for cricket from 2nd index

// ================ MultiDimensional Arrays ====================
// let arr = [['iphone 14','apple adapter','airpods'],['cushion cover','pillow cover'],['tooth brush','bathing items']];
// console.log(arr[1][1]);

    // interate over the 2d array
// let arr = [[1,2],[3,4]];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }

    // modified version
// let arr = [[1,2],[3,4],5,6,7];
// for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//         for(let j = 0; j < arr[i].length; j++){
//             console.log(arr[i][j])
//         }
//     } else {
//         console.log(arr[i]);
//     }
// }

// activity in 2d array
// let arr = [[0,1],[2,3],[4,5]];
// function printArray(arr){
//     for(let i = 0;i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             console.log(`[${i}][${j}] = ${arr[i][j]}`);
//         }
//     }
// }

// printArray(arr);
// ===================================================
// converting array to string and string to array

// string to array

// let str = "This is the string and convert it to the array";
// let arr = str.split(" ")
// console.log(arr);
// let convertedStr = arr.join(" ");
// console.log(convertedStr);

//reverse a string
// let string = "Vigneshwar";
// console.log(string.split('').reverse().join(''));

// ============ OBJECTS =======================

//Creating objects
// method 1 of creating objects
// let arr = []; //array
// let obj = {
//     name: "vignesh",
//     location: "banaglore",
//     age: 18,
//     anArray:[1,2,3],
//     anObj: {
//         name: "new name",
//     }
// }; // object

// method 2 of creating objects
// let obj1 = {
//     name:"vignesh"
// }
// obj1.name = 'gnanam'; //updating the property
// obj1.age = 52; //adding new property

//acessing the objects
// method 1 : dot notation
// console.log(obj.name);
// console.log(obj.anArray[1]);

//method 2 : sqaure bracket
// console.log(obj['name']);
// console.log(obj['age']);

//deletion of properties in obje
// delete obj.age;
// console.log(obj);

// Activity

// let obj = {}
// obj.name = "d"+"vigneshwar"+"crio.do";
// console.log(obj);

// 2
let person = {}

person.name = "vigneshwar";
person.jobTitle = "Full stack intern";
person.email = "vicky@gmail.com";
person.isVerified = false;

console.log(`Name: ${person.name} Status: ${person.isVerified}`);

person.isVerified = true;
delete person.name;
person.firstName = "vicky";
person.lastName = "Vignesh";

console.log(person);