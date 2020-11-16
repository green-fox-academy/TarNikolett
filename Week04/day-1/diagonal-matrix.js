'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//[1,0,0,0]
//[0,1,0,0]
//[0,0,1,0]
//[0,0,0,1]

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

function createFunction(size) {
  let matrix = [];
  for (let index = 0; index < size; index++) {
    let actualRow = [0, 0, 0, 0];
    actualRow[index]=1;
    matrix.push(actualRow);
  }
  console.log(matrix);
};
createFunction(4);

/*let matrix = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8]
]

console.log(matrix[0][0])
// --> [ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]*/
