// array methods
//normal way
// const arr = [1,2,3,4,5];

// for(let i = 0 ; i < arr.length; i++){
//     console.log(arr[i]);
// }

// //forEach
// // parameters always in the same order element, index, arr
// arr.forEach((ele,index,arr) => {console.log(ele,index,arr)});

//find method

// let studentInformation = [
//     {
//         name: "rahul",
//         marks:90,
//     },
//     {
//         name: "gokul",
//         marks:80,
//     },
//     {
//         name: "mani",
//         marks:70,
//     },
//     {
//         name: "dinesh",
//         marks:60,
//     },
//     {
//         name: "oviyan",
//         marks:50,
//     },
// ];

// const result = studentInformation.find((ele,index,arr) =>{
//     ele.name === 'rahul'
// })

// console.log(result)

// sort method

let sports = ["cricket","football",'volleyball',"basketball","throwball"];
console.log("Before sorting: ",sports);
sports.sort();
console.log("After sorting: ",sports);

let numbers = [1,2,100,50,40,35,200,999,12,14,23,79];
//ascending order;
numbers.sort((a,b) => a -b);
console.log("Ascending order sorting: ",numbers);
//descending order:
numbers.sort((a,b) => b -a);
console.log("decending order sort: ",numbers);


//sorting array of object

const array = [
    {
        name:"kevi",
        age: 25,
    },
    {
        name:"arnold",
        age: 6,
    },
    {
        name:"sheila",
        age: 25,
    },
];

array.sort((a,b) => a.age - b.age);
array.forEach((ele) => console.log(ele.name));