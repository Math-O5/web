// 2 choices 3 possibilities!
// input 2 [a,b, c]
// output aa, ab, bb, ba, ac, ca, cb, bc, cc

let abc = function(possibilities, choices) {
    let results = [];
    let permutation = function(acummulator, choices) {
        if(choices === 0) {
            results.push(acummulator);
            return;
        }
        for(let i = 0; i < possibilities.length; ++i) {
            permutation(acummulator + possibilities[i], choices - 1);
        }
    }

    permutation('', choices);
    return results;
}

console.log(abc(['a', 'b', 'c'], 2));