let arr1 = ["a", "c", "e"];
let arr2 = ["b", "d", "f"];

let n = arr1.length;
let result = []
for(let i = 0 ; i < n; i++){
    // let element = arr1[i]+arr2[i]
    // result.push(element);
    for(let j = 0; j < n; j++){
        let element = arr1[i]+arr2[j];
        result.push(element);
    }
}

console.log(result);