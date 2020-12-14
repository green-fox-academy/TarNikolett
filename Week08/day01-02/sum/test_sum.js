import test from 'tape';
import { Sum } from './sum.js';

test('try to sum numbers', function (t) {
    let sumnum = new Sum();
    let arrayOfNumbers = [1];

    let expected = 1;
    let actual = sumnum.sumNumbers(arrayOfNumbers);

    t.equal(actual, expected);
    t.end();

});
