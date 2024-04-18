function remove(names, startIndex, deleteCount) {
    const removedNames = names.splice(startIndex,deleteCount);
    return removedNames;
}