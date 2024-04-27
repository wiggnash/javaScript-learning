let arr = [7, "ate", "", false, 9];

let newArray = arr.filter((ele) => {
    return !(ele === false || ele === null || ele === 0 || ele === "" || ele === undefined || Number.isNaN(ele))
})

console.log(newArray);