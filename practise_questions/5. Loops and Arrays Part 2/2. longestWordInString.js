let string  = "The quick brown fox jumped over the lazy dog";
let stringArray = string.split(' ');
console.log(stringArray);

let max = stringArray[0].length;

for(let i = 1;i < stringArray.length; i++){
    if(max < stringArray[i].length){
        max = stringArray[i].length;
    }
}

console.log(max);
