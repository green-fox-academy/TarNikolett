/* Bevásárlólistánkat egy tömböt fogjuk reprezentálni, mely szövegeket tartalmaz.
Készíts egy tömböt az alábbi tételekkel:
tojás, tej, hal, alma, kenyér és csirke
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
Van tej a listán?
Van banán a listán? */

let shoppingList = ['tojás', 'tej', 'hal', 'alma', 'kenyér', 'csirke'];

console.log( 'Tej: ' + shoppingList.includes ('tej'));
console.log( 'Banán: ' + shoppingList.includes ('banán'));