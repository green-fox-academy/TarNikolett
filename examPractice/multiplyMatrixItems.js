/* Write a function called multiplyMatrixItems that
takes an integer matrix (array of arrays) as a parameter,
multiplies each even number by 2 in each odd indexed row,
returns the modified matrix.
Example case:
1 3 6 2
4 5 6 1
3 3 1 5
9 0 5 2
The result should be:
1  3  6  2
8  5  12 1
3  3  1  5
9  0  5  4 */

let matrix =
    [
        [1, 3, 6, 2],
        [4, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 2]
    ]

function multiplyMatrixItems(matrix) {
    let copyMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
        copyMatrix[row] = [...matrix[row]]; /* vagy: matrix.map(row=> {new.array.push(…row)}) */
        if (row % 2 == 1) {
            for (let item = 0; item < matrix[row].length; item++) {
                if (matrix[row][item] % 2 == 0) {
                    copyMatrix[row][item] = matrix[row][item] * 2
                }
            }
        }
    }
    return copyMatrix
};

console.log(matrix);
console.log(multiplyMatrixItems(matrix));
console.log(matrix);