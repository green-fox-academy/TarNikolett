// Egy bizonyos számú nyuszikánk van és minden nyuszinak két nagy, lapát füle.
// Ki szeretnénk számolni az összes nyuszifül számát rekurzívan
// (ciklusok és szorzás nélkül).

let numberOfEars = 0;

function bunnies(numberOfBunnies) {
    if (numberOfBunnies <= 0) {
        return numberOfEars
    }
    numberOfEars += 2;
    return bunnies(numberOfBunnies - 1);
};

console.log(bunnies(4));