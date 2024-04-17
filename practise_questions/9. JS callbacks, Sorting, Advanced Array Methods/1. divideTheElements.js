// method 1
function halfValues(arr){
    let result = arr.map((ele,index) => ele/(index+1));
    return result;
}


// method 2
function halfValues(arr){
    let resultArray = [];
    arr.forEach((ele,index) => {
        resultArray.push((ele/(index+1)))
    })
}