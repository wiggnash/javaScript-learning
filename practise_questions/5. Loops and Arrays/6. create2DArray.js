let array = [];
let n = 2;
for(let i = 0; i < n;i++){
    let newArray = []
    for(let j = 0; j < n; j++){
        newArray.push(j);
    }

    array.push(newArray);
}

console.log(array);