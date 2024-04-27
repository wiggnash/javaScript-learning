//======== CREATING OBJECT ==========

const person = {};
let firstName = "Vigneshwar";
let lastName = "Deivasigamani";
let middleName = "Coder";

person.fullName = `${firstName} ${middleName} ${lastName}`;

console.log(person);

// ========= UPDATE PROPERTY IN OBJECT ========


function updateProperty(obj, propName, str) {
    // You only need to implement this function.
    obj[propName] = str;
    return obj[propName];
  
}

// ======= DELETE PROPERTY IN OBJECT ==========

function deleteProperty(obj,propName){
    // You only need to implement this function.
    delete obj[propName];
    return obj;
}

// ======== CHECK IF THIS PROPERTY OR KEY EXIST

function checkProperty(obj,propName){
    // You only need to implement this function.
    const value = obj.hasOwnProperty(propName);
    return value;
}

