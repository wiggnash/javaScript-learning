function sum(arr) {
    const total = arr.reduce((sum,number)=> sum + number,0)
    return total;
}