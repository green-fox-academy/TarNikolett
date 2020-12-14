/* Írd meg a Bikák és Tehenek játékot: CAB.
A feladatban egy kódfeltörő játék részeit kell egymást követően megírni.
A játék során a játékos kap egy 4 számjegyből álló titkos kódot, amelyet tippelgetéssel kell kitalálnia.
A tippelés eredményéről bikák és tehenek számának formájában kapunk tájékoztatást:
A tehenek (cows) száma megadja, hogy a tippelt sorozatban hány számjegy szerepel, sorrend szerint nem megfelelő helyen.
A bikák (bulls) száma megadja, hogy a tippelt sorozatban hány számjegy szerepel, sorrend szerint megfelelő helyen.
Például ha a titkos kód "4271" és a tipp "1234", akkor a válasz: "1 bika és 2 tehén" (ahol a bika a "2"-esre, míg a két tehén a "4"-re és az "1"-re utal).

A cél 4 bika elérése.

A CAB (Cow and Bull) objektumnak legyen egy 4 számjegyből álló random szám tulajdonsága (field), ami a tippelendő számot reprezentálja.
A CAB objektumnak legyen egy állapota, ami a játék állapotát reprezentálja (játékban, vége).
A CAB objektumnak legyen egy tippelés számláló mezője.
A CAB objektumnak legyen egy függvénye, ami visszaadja String formátumban a tippelés eredményét.
Minden függvényt, beleértve a konstruktort is, teszteld le! */