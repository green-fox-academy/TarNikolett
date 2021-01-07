Édességbolt (CandyShop)
Ebben a feladatban egy édességboltot (CandyShop) fogsz készíteni, ahol cukorkát és nyalókát készítesz, illetve árulsz.

Édesség (Candy)
Az édességet az ára (price) és a benne található cukor (sugar) mennyisége jellemzi.
2 típusú édesség létezik: a nyalóka (Lollipop) és a cukorka (HardCandy).
Nyalóka (Lollipop)
Az ára 600 Ft és 60 gramm cukorból készül.
Cukorka (HardCandy)
Az ára 1200 Ft és 80 gramm cukorból készül.
Édességbolt (CandyShop)
Az édességboltot a rendelkezésre álló cukor mennyisége (sugar), a bevétel (income) és a készlet (inventory, az édességek listája) jellemzi.

Egy édességbolt példány létrehozásakor bemenetként a cukor mennyiségét (amountOfSugar) kell megadni.

Van egy édességkészítés (createCandy) metódusa, amelynek az egyetlen paramétere bármelyik édesség (Candy) lehet, és

a cukor mennyisége (sugar) nem csökkenhet 0 alá,

ha a cukor mennyisége 0 alá csökkenne,

akkor dobjon hibát/kivételt beszédes üzenettel

egyébként adja hozzá az édességet a készlethez (inventory),

és csökkentse a rendelkezésre álló cukor mennyiségét az édességhez felhasznált cukor mennyiségével

Van egy áremelés (raisePrice) metódusa, amelynek az egyetlen paramétere az áremelés összege, és

növelje meg a készletben található összes édesség árát a megadott összeggel
Van egy eladás (sell) metódusa, amelynek az egyetlen paramétere az eladni kívánt édesség mennyisége, és

a bevételt megnöveli az eladott édességek árával, és

az eladott édességeket eltávolítja a készletből

ha több édességet kíván eladni, mint amennyi készleten van (ilyet nem lehet),

akkor legfeljebb annyit adjon el, amennyit lehetséges

Van egy cukorvásárlás (buySugar) metódusa, amelynek az egyetlen paramétere a mennyiség, és

a paraméter értéke kilogrammban van megadva,

és 1000 gramm cukor ára 600 Ft

ha a bevétel 0 alá csökkenne,

akkor dobjon hibát/kivételt beszédes üzenettel

egyébként növelje meg a rendelkezésre álló cukor mennyiségét,

és csökkentse a bevételt a megvásárolt cukor árával

Van egy szöveggé alakító (toString) metódusa, amely az édességboltot reprezentálja, és

visszatér egy string-gel a következő formátumban:

Készlet: 0 cukorka, 1 nyalóka; Bevétel: 30000 Ft; Cukor: 400 gramm