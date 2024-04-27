const arr1 = ["Raghu", "Goli", "Farhat", "Mridula", "Rahul"]
const arr2 = ["Mridula", "Raghu", "Goli", "Farhat"];


let person = "";
for(let i = 0 ; i < arr1.length;i++){
    if(arr1[i] === "Mridula"){
        person = arr1[i - 1];
    }
}
for(let j = 0 ; j < arr2.length; j++){
    if(arr2[j] === person){
        console.log(j);
        break;
    }
}

