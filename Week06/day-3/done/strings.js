// Adott egy string.
// Készíts rekurzívan (ciklusok nélkül) egy új stringet, ahol
// minden kisbetűs 'x' karakter 'y'-ra cserélődik.

let text = 'xbox';

function changeLetters(sentence, index = 0) {
    if ( index > sentence.length -1) {
        return sentence.join('');
    };
    let newSentence = sentence;
    if (newSentence[index] === 'x') {
        newSentence.splice(index, 1, 'y');
    }
  
    return changeLetters(newSentence, (index + 1));
}

console.log(changeLetters(text.split('')));