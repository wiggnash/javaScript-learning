let array = [[23,48],[12,18]];
let sum = 0;
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length;j++){
        sum += array[i][j];
    }
}


console.log(sum);