import minimist from 'minimist';

let args = minimist(process.argv);
console.log(args);

/* Adott a megnyitott terminál a projekt könyvtáron belül
Amikor elindítom az alkalmazást argumentum nélkül
Akkor ki kell nyomtatnia az applikáció "használati utasítását"
$ todo

Parancssori Todo applikáció
=============================

Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot
 */

 