function iterator(array, test, final) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i])) { return false; }
    }
    return true;
}
let i = 0

function iterator2(array, test) {
    console.log(array[i])
    if (i == array.length) { return true }
    if (!test(array[i++])) {
        return false;
    }
    return iterator2(array, test)
}

const result = iterator2([14, 2, 232, 4, 34, 44], n => n > 3)
console.log(result)