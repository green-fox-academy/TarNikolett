// Írj egy rekurzív függvényt, ami egy paramétert kér: n és
// összeadja a számokat 1-től n-ig.

function numberAdder (n) {
        if ( n < 1 ){
            return 0
        }
        return n + numberAdder(n-1)
};
console.log(numberAdder(3));