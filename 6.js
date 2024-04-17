/// nested objects
const person = {
    name: 'vigneshwar',
    age: 30,
    address: {
        streetAddress: '123 street',
        city: "Chennai",
        state: "Tamilnadu",
        pincode: 600103,
    }
}

person.address.landmark = "near temple";

//================= object deconstruction ======================== 

// access the name and age and store it into two sepeate variable

const {name , age} = person; // these two are the variable name and not a object 
console.log(`name ${name} age ${age}`);

// if we want the variable names to be different then use this way
const {name: nameVariable , age: ageVariable} = person; // these two are the variable name and not a object 
console.log(`Changed variable name ${nameVariable} changed variable age  ${ageVariable}`);

// nested objects
const { address } = person;
console.log("address",address);

const { streetAddress, city } = person.address;
console.log(`Street Address ${streetAddress} and ${city}`);

//================= Array Destruction =========================

const arr = [1,2,3,4,5];
// const [a,b,c,d,e] = arr; // all elements
const [,,c,d,e] = arr; //only specific elements

// ============= ARRAY OF OBJECTS ===========================

let student = [
    {
        rollNo: 1,
        name: 'Dinesh',
        address: "123 street",
    },
    {
        rollNo: 2,
        name: 'vignesh',
        address: "124 street",
    },
    {
        rollNo: 3,
        name: 'ganesh',
        address: "125 street",
    }
];

const data = student.find((element)=>element.rollNo === 2);
console.log(data);

// Activity
let car = [
    {
        color: "red",
        type: "type_1",
        capacity: 4,
    },
    {
        color: "blue",
        type: "type_2",
        capacity: 5,
    },
    {
        color: "green",
        type: "type_1",
        capacity: 7,
    }
]

console.log(car[2].capacity);
console.log(car[2]['type']);

// activity find the max marks out of all three
const studentMarks = [
    {
        name: "vignesh",
        std_id: 10,
        marks: 50,
    },
    {
        name: "ganesh",
        std_id: 20,
        marks: 60,
    },
    {
        name: "suresh",
        std_id: 30,
        marks: 70,
    },
]

let maxName = studentMarks[0].name;
let maxMarks = studentMarks[0].marks;

for(let i = 0 ; i < studentMarks.length;i++){
    if(studentMarks[i].marks > maxMarks){
        maxMarks = studentMarks[i].marks;
        maxName = studentMarks[i].name;
    }
}

console.log(`Name:${maxName} Marks: ${maxMarks}`);