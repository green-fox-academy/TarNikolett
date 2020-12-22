/* A névjegyzékünket egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a nevek és a telefonszámok szöveges típusúak.
Készíts egy Map-et az alábbi kulcs-érték párokkal:
Név (kulcs)	Telefonszám (érték)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
Mi John K. Miller telefonszáma?
Kinek a száma a 307-687-2982?
Tudjuk-e Chris E. Myer telefonszámát? */

'use strict:'

let phoneBook = {
    "William A. Lathan" : '405-709-1865',
    "John K. Miller" : '402-247-8568',
    "Hortensia E. Foster" :'606-481-6467',
    "Amanda D. Newland" : '319-243-5613',
    "Brooke P. Askew" : '307-687-2982'
}

// 1
console.log(phoneBook [ 'John K. Miller']);

//2

let indexOfphoneNumber = Object.values(phoneBook).indexOf("307-687-2982");
let keyOfPhoneNumber = Object.keys(phoneBook)[indexOfphoneNumber];

console.log(keyOfPhoneNumber);

//3
console.log( phoneBook.hasOwnProperty( 'Chris E. Myer'));


