Bankrendszer
Ebben a feladatban bankszámlát (BankAccount) fogsz készíteni, amin pénzt tudsz elhelyezni és amiről pénzt tudsz levenni.

Valuta (Currency)
A valutát a pénznem kód (code), a központi bank neve (central bank name) és az érték (value) mezők jellemzik.
USA dollár (USADollar)
Pozitív értéket fogad el.
A kód alapértelmezetten USD.
A központi bank neve alapértelmezetten Federal Reserve System.
Magyar forint (HungarianForint)
Pozitív értéket fogad el.
A kód alapértelmezetten HUF.
A központi bank neve alapértelmezetten Hungarian National Bank.
Bankszámla (BankAccount)
A bankszámlát a neve (name), a pin kódja (pinCode) és a valuta (Currency típusú) mezők jellemzik.

Van befizet (deposit) metódusa, amelynek az egyetlen paramétere az összeg, és

ellenőrzi, hogy a paraméterként megadott érték pozitív-e,
majd hozzáadja a paraméter értékét a valuta érték mezőjéhez.
Van felvesz (withdraw) metódusa, amelynek két paramétere van: a pin kód és az összeg, és

ellenőrzi, hogy a megadott pin kód helyes-e (egyenlő-e az eredeti pin kóddal),

és a valuta értéke nagyobb, mint a felvenni kívánt összeg

ha igen, akkor levonja az összeget a valuta értékéből,

és visszatér a felvenni kívánt összeggel

egyébként nem módosítja a valuta értékét,

és 0-val tér vissza

Bank
A bankot a hozzá tartozó bankszámlák (BankAccount) listája jellemzi.

Van számla létrehozás (createAccount) metódusa, amelynek az egyetlen paramétere a bankszámla (BankAccount típusú), és

hozzáadja a bankszámlát a listához
Van tőke lekérdezés (getAllMoney) metódusa, amely

visszatér az összes bankszámlán található pénz összegével (függetlenül a valuta pénznemétől)