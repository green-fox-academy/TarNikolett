// A nyuszikáink egy sorban állnak megszámozva 1, 2, 3, 4, ...
// A páratlan nyusziknak (1, 3, ...) 2 fülük van.
// A páros nyusziknak (2, 4, ..) most 3 fülük van, mert
// mindegyik felemeli az egyik lábát is.
// Rekurzívan térj vissza a sorban álló nyuszik
// füleinek számával 1, 2, ... n (ciklusok és szorzás nélkül).

let bunnies = [1, 2, 3, 4, 5, 6];

function getBunniesEars (array){
    if (array.length === 0){
        return;
    }
    if ( array[0] % 2 === 0){
        console.log( 'number ' + array[0] + ' bunny has 3 ears');    
    }
    else if ( array[0] % 2 !== 0){
        console.log('number ' + array[0] + ' bunny has 2 ears');
    }
    array.shift();
    let newArray = array;
    return getBunniesEars(newArray)
}
getBunniesEars(bunnies);



