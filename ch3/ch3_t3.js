function countDupUpperOfChar(str, char) {
    var dem = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) dem += 1;
    }
    return dem;
};
const text = "Bi Ba Bi BO bi ba bibbbbbb"
console.log(countDupUpperOfChar(text, 'B'))