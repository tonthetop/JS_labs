var i = 0;

function arrayToList(array) {
    var list = {};
    if (i < array.length) {
        list = retriveArray(array[i++], arrayToList(array));
    } else { return null }
    return list
};

function retriveArray(value, list) {
    return {
        value: value,
        rest: list
    }
};
const array = [1, 2, 3, 4]
const list = arrayToList(array)
console.log(list)

function listToArray(list, array) {
    array.push(list.value)
    if (list.rest != null) {
        listToArray(list.rest, array)
    }
    return array
}
const list2 = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: { value: 5, rest: { value: 6, rest: null } } } } } }
const array2 = listToArray(list2, [])
console.log(array2)