//Tömbökkel fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.

'use strict:'

//Készíts együres tömböt, ami szövegeket tartalmaz!
let names = [];

//Írasd ki a tömb elemeinek a számát!
console.log(names.length);

//Írasd ki, hogy a tömb üres-e vagy sem!
if(names.length=0){
    console.log(true)
}
else{
    console.log(false)
}

//Add hozzá Williemet a tömbhöz!
names.push('Williem');
console.log(names);

//Add hozzá Johnt a tömbhöz!
names.push('John');
console.log(names);

// Add hozzá Amandát a tömbhöz!
names.push('Amanda');
console.log(names);

//Írasd ki a tömb harmadik elemét!
console.log(names[2]);

//Iterálj végig a tömbön, és írasd ki az összes nevet!
//William
//John
//Amanda

for (let i=0; i < names.length; i++){
    console.log(names[i])
} ;

//Töröld a második elemet a tömbből!
delete names[1];
console.log(names);

//Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!
//Amanda
//William
for (index = names.length; index >= 0; index--){
    console.log(names[index])
};

//Távolítsd el a lista összes elemét!
names.splice(0, names.length)
console.log(names);