/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let left = 0,
        right = directions.length - 1;

    while (left < directions.length && directions[left] == 'L') {
        left++;
    }

    while (right >= 0 && directions[right] == 'R') {
        right--;
    }

    let count = 0;
    for (let i = left; i <= right; i++) {
        if (directions[i] != 'S') {
            count++;
        }
    }
    //combining these three loops - TC : O(N).

    return count;

}
var directions = "RLRLL";
console.log(countCollisions(directions))