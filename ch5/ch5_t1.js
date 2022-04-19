function createArrayOfArraysRandom() {
    const n = Math.round(Math.random() * 10);
    const array = new Array();
    for (let i = 0; i < n; i++) {
        const m = Math.round(Math.random() * 10);
        const current = new Array();
        for (let j = 0; j < m; j++) {
            current.push(Math.round(Math.random() * 100));
        }
        array.push(current);
    }
    return array;
}
const array = createArrayOfArraysRandom()
console.log(array);
const brray = array.reduce((a, b) => a.concat(b))
console.log(brray);