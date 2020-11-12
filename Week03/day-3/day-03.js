// Úgy módosítsd a programot, hogy téged üdvözöljön a Világ helyett
console.log('Hello Niki!')

// Írasd ki a "Lipem lopom a szőlőt" című mondóka sorait helyes sorrendben
/*
console.log('elaludt az öreg csősz.');
console.log('Lipem, lopom a szőlőt,');
console.log('vaskalap a fejébe.');
console.log('Furkósbot a kezébe,');
*/
console.log('Lipem, lopom a szőlőt,');
console.log('elaludt az öreg csősz.');
console.log('Furkósbot a kezébe,');
console.log('vaskalap a fejébe.');

// Üdvözöld 3 osztálytársad 3 sorban kiiratva a nevüket, ehhez hasonlóan:
/*
//
// Helló Eszter!
// Helló Maris!
// Helló Józsi!
*/

// Helló Eszter!
// Helló Vivien!
// Helló Balázs!
// vagy:
console.log('Helló Eszter!')
console.log('Helló Vivien!')
console.log('Helló Balázs!')

// Írj egy programot, ami kiír rólad pár részletet a konzolra
// Minden egyes részletet új sorba írja a program:
//  - Neved
//  - Korod
//  - Magasságod méterben kifejezve (tört érték)

console.log('Tar Nikolett');
console.log('25');
console.log('1.71');

// Írasd ki 13 és 22 összegét
// Írasd ki 13 és 22 különbségét
// Írasd ki 13 és 22 szorzatát
// Írasd ki 22-őt osztva 13-mal művelet eredményét (tört szám)
// Írasd ki 22-őt osztva 13-mal művelet osztási maradékát.

console.log(13 + 22);
console.log(13 - 22);
console.log(13 * 22);
console.log(22 / 13);
console.log(22 % 13);

// Egy átlagos Green Fox hallgató 6 órát kódol naponta
// Egy félév hosszúsága 17 hét
//
// Írd ki, hány órát tölt kódolással egy hallgató egy félév során,
// ha a hallgató csak hétköznap kódol

console.log(17 * 5);
const halfYearWorkDays = 85;
console.log("A student during a semester spends " + halfYearWorkDays * 6 + " hours with coding!");

// Írd ki, hogy a félév hány százalékát tölti a hallgató kódolással
// ha az átlagos heti munkaidő 52 óra

const wholeTime = 17 * 7 * 24;
const hoursSpentWithCoding = 52 * 17;
const percentage = (hoursSpentWithCoding / (wholeTime /100)).toFixed(2);
console.log (`A student during a semester spends ${percentage}% of his time with coding!`);
