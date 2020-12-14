import test from 'tape';
import {Apple} from './apple.js';

test ('print apple', function (t){
    let actual = new Apple();
    let expected = 'apple'
 
    t.equal( actual.getApple(), expected);
    t.end();
});



