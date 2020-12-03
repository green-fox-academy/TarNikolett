// Adott egy string,
// készíts rekurzívan egy új stringet, ahol
// minden 'x' karakter el lett távolítva.

let text = 'xbox';

function removeX (sentence , index = 0) {
    if (index > sentence.length - 1){
        return sentence.join('');
    }
    let newSentence = sentence;
    if (newSentence[index] === 'x') {
        newSentence.splice(index, 1);
    }
  
    return removeX(newSentence, (index + 1));
};
console.log(removeX(text.split('')));