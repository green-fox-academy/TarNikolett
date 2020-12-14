/* Írj egy függvényt, ami kiszámolja a Fibonacci sorozat n-edik tagját a megadott n bemenet alapján!
Írj rá teszteket! */

export function fibonacciCounter (n){
    if (n === 0){
        return ;
    }
    else if (n === 1){
        return 0;
    }
    else if(n === 2){
        return 1;
    }
    return fibonacciCounter(n-1) + fibonacciCounter(n-2);
};

// console.log(fibonacciCounter(0));
// console.log(fibonacciCounter(1));
// console.log(fibonacciCounter(2));
// console.log(fibonacciCounter(3));
// console.log(fibonacciCounter(4));
