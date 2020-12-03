// Adott egy string,
// készíts egy új stringet rekurzívan úgy, hogy
// minden szomszédos karakter egy `*` karakterrel legyen elválasztva

let text = 'xbox';

function pushSymbol(sentence, index = 0) {
    console.log(index);
    if (index > sentence.length - 1) {
        return sentence;
    }
    let newSentence = sentence;
    newSentence.splice(index + 1, 0, '*');
    
    
    return pushSymbol(newSentence, (index + 1));
};
console.log(pushSymbol(text.split('')));