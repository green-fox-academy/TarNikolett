'use strict';
// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array
let mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let newNumber = callback(array[i]);
        output.push(newNumber);
    }
    return output;
};

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:
console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:
mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    return output;
};

const words = ['map', 'reduce', 'filter'];

// Create a callback function which removes every second character from a string
const removeSecondLetter = (word) => {
    let splittedWord = word.split('');
    for (let j = 1; j < splittedWord.length;  j++) {
        splittedWord.splice(j, 1);
    }
    let newWord = splittedWord.join('');
    return newWord
};

console.log(mapWith(words, removeSecondLetter));
//expected result: ['mp','rdc', 'fle']