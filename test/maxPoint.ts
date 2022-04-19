function maximumBobPoints(numArrows: number, aliceArrows: number[]): number[] {
    type Solution = {
        arrows: number[],
        score: number;
    }

    const targetsCount = aliceArrows.length;
    console.log(targetsCount)
    const dp = (k: number, arrowsLeft: number, path: number[]): Solution => {
        if (arrowsLeft <= 0) {
            return {
                score: 0,
                arrows: path
            };
        } else if (k === targetsCount) {
            const endPath = [...path];
            endPath[0] += arrowsLeft;
            return {
                score: 0,
                arrows: endPath
            }
        };

        const requiredArrows = aliceArrows[k] + 1;
        let result = dp(k + 1, arrowsLeft, path);
        if (requiredArrows <= arrowsLeft) {
            const newPath = [...path];
            newPath[k] = requiredArrows;
            const shotResult = dp(
                k + 1,
                arrowsLeft - requiredArrows,
                newPath,
            );
            shotResult.score += k;

            if (result.score < shotResult.score) result = shotResult;
        }

        return result;
    }

    let result = dp(0, numArrows, Array(targetsCount).fill(0));

    return result.arrows;
};

var numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]
const x= maximumBobPoints(numArrows,aliceArrows)
console.log(x)