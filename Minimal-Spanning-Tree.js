let mst = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

let parent = []; // To store the weights of the edges
let key = [];//To store the Path
primeMST(mst)
function primeMST(mst) {
    for (let i = 0; i < mst.length; i++) {
        parent[i] = i === 0 ? 0 : Number.MAX_SAFE_INTEGER  // Initialize the parent array with maximum interger value
    }
    for (let i = 0; i < mst.length; i++) {
        for (let j = 0; j < mst.length; j++) {
            if (mst[i][j] !== 0) {
                if (parent[j] > mst[i][j]) {
                    key.push({ from: i, to: j });
                    parent[j] = mst[i][j]
                } 
            }

        }
    }
    console.log('Edges   ', ...key)
    console.log('Weight   ', ...parent)

}