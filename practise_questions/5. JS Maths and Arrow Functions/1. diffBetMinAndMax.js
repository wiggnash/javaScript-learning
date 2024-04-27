function maxMinDifference(arr) {
    // You only need to implement this function.

    // Approach 1 
    let min = +Infinity;
    let max = -Infinity;
    let n = arr.length;

    for(let i = 0 ; i < n; i++){
        min = Math.min(min,arr[i]);
        max = Math.max(max,arr[i])
    }

    return max - min;

    // Approach 2(Only valid since the length of array is atleast 1)

    return (Math.max(...arr) - Math.min(...arr));
}