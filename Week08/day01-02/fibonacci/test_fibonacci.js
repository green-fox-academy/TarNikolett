import test from 'tape';
import { fibonacciCounter } from './fibonacci.js';

test ('soemthing' , function(t){
    let expected = 8;
    let actual = fibonacciCounter(7);

    t.equal(actual, expected);
    t.end();
})