function replaceElement(arr, index, ele) {

    if( index > (arr.length - 1)){
        arr.push(ele)
    }else {
        arr[index] = ele;
    }
}