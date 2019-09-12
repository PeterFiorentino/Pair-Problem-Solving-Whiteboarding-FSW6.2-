let arr = [1,1,2,2,2,1];
let arr2 = [1,1,2,2,1];

function noTriples(arr) {
    for (let i of arr) {
        let counter = 0;
        for(let x of arr) {
            if (i === x) {
                counter++;
                if (counter === 3) {
                    return false;
                }
            } else {
                counter = 0;
            }
        }
    }
    return true;
}

console.log(noTriples(arr));
console.log(noTriples(arr2));