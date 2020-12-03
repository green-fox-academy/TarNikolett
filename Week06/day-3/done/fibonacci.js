// A Fibonacci-számok a matematikában az egyik legismertebb sorozat elemei,
// és történetesen pont van rekurzív definíciójuk.
// Az első két értéke a sorozatnak a 0 és az 1 (a két alapeset).
// Minden rákövetkező érték az előző két érték összege,
// tehát a számsor: 0, 1, 1, 2, 3, 5, 8, 13, 21 és így tovább.
// Készíts egy rekurzív fibonacci(n) metódust, ami
// az n-edik fibonacci számmal tér vissza, ahol
// n = 0 reprezentálja a sorozat kezdetét.

/*
1:0
2:1
3:1+0=1
4:1+1=2
5:1+2=3
6:2+3=5
...
*/
function fibonacci (n){
    if (n === 0){
        return;
    }
    else if (n === 1){
        return 0;
    }
    else if(n === 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6));