function maxCapacityType(arr) {
    //[{},{},{},{}]
    let max = arr[0].capacity;
    let index = 0;
    for(let i = 1; i < arr.length;i++){
        if(max < arr[i].capacity){
            max = arr[i].capacity;
            index = i;
        }
    }

    return arr[index].type;
}