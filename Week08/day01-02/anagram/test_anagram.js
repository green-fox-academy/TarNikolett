import test from 'tape';
import { anagramma } from './anagram.js';



test('Function return true', function (t) {
    let expected = true;
    let actual = anagramma('alma', 'lama');

    t.equal(expected, actual);
    t.end();
});

test('Function return false', function (t) {
    let expected = false;
    let actual = anagramma('alma', 'baba');

    t.equal(expected, actual);
    t.end();
});

test('If param2 uppercase', function (t) {
    let expected = true;
    let actual = anagramma('alma', 'Amla');

    t.equal(expected, actual);
    t.end();
});