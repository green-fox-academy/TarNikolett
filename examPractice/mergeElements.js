/* Merge arrays
Create a function called mergeElements that takes two string arrays / lists as an input and merges the two arrays / lists into one.
Example case:
mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat"]);
Should return:
["apple", "dog", "pear", "cat", "banana", "orange"] */

function mergeElements(toArray, fromArray) {
    let newArray = [];
    for (let i = 0; i < toArray.length; i++) {
        newArray.push(toArray[i]);
        if ( fromArray[i] !== undefined){
            newArray.push(fromArray[i]);
        }
    }
    return newArray
};

console.log(mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat"]));