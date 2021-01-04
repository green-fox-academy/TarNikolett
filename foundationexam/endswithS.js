/* Create a function called countWordsEndsWithS that takes a string as an input and returns the number of the words, that ends with s in it.
Example case:
countWordsEndsWithS("ends with s characters");
Should return 3, because "ends with s characters". */

function countWordsEndsWithS(str) {
    let words = str.split(" ");
    let num = 0;
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        if (letters[letters.length - 1] === 's') {
            num++
        }
    }
    return num
};
console.log(countWordsEndsWithS("ends with s characters"));
