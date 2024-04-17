function canVote(ages) {
    // You only need to implement this function.
    const valid = ages.filter(age => age >= 18);
    return valid;
  }