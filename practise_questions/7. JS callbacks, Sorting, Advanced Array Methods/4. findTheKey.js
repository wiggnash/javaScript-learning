function search(arr, key) {
    let ans = false;
    arr.forEach((value) => {
        if(value === key) ans = true;
    })

    return ans;
}
  
if (search([1, 2, 3, 2, 3, 2], 0) != false)
    console.log("Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 ");
else
    console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!");