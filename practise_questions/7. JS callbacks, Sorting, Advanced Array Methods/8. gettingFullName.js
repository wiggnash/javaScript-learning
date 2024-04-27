
function getFullName(obj) {
    // You only need to implement this function.
    function full(person){
    return person.firstname+" "+person.lastname;
  }
  
    const name = obj.map(full);
    return name;
}

  
  