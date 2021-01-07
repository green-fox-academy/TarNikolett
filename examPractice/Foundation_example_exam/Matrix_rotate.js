/* Matrix rotate
Create a function named rotateMatrix that takes an n×n integer matrix
(array of arrays) as parameter and returns a matrix which elements are rotated
90 degrees clockwise.
Example
Input
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Output
[ [ 7, 4, 1 ],
  [ 8, 5, 2 ],
  [ 9, 6, 3 ] 
] */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotateMatrix(matrix) {
    let copyMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
        let rowArray= [];
        for (let item = matrix.length - 1; item >= 0; item--) {
            rowArray.push(matrix[item][row]);
            
        }
        copyMatrix.push(rowArray);
    }
    return copyMatrix
};

console.log(matrix);
console.log(rotateMatrix(matrix));
console.log(matrix);