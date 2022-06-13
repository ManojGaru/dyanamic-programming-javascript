
var min = 999;
let completed = [];
let tsp = [
    [0, 4, 1, 3],
    [4, 0, 2, 1],
    [1, 2, 0, 5],
    [3, 1, 5, 0]
]
//  [0, 10, 15, 20],
//  [10, 0, 35, 25],
//  [15, 35, 0, 30],
//  [20, 25, 30, 0]
TSProblem(tsp, 0)

function TSProblem(tsp, s) {

    for (let i = 0; i < tsp.length; i++) {
        if (i === s) {
            let sorted = tsp[i].filter((e, k) => k !== s)
            min = Math.min(...sorted);
            let index = tsp[i].indexOf(Math.min(...sorted))
            completed.push({ value: min, index: index })
        }
        if (i !== s) {

            let l = completed.length;
            console.log(l, (tsp.length - 1))
            if (l === tsp[i].length - 1) {
                completed.push({ value: tsp[tsp[i].length - 1][s], index: s })
            } else {
                let sorted = tsp[completed[l - 1].index].filter((e, j) => completed.find((item1, m) => m !== j) && completed[l - 1].index !== j && j !== s)
                min = Math.min(...sorted);
                let index = tsp[completed[l - 1].index].indexOf(Math.min(...sorted))
                completed.push({ value: min, index: index })
            }
        }
    }
    let sum = 0;
    let path = '0';
    for (let s = 0; s < completed.length; s++) {
        sum += completed[s].value;
        path += '->' + completed[s].index
    }
    console.log(sum, path)
}

/**
 * output 
 * 
 * 7    '0->2->1->3->0'
 */