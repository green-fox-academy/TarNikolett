//A "todoText" lista kezdődjön a "My todos:" szöveggel
//(a jelenlegihez add hozzá ezt a szöveget úgy, hogy elé kerüljön)
//Add hozzá a " - Download games" tennivalót a lista végére
//Add hozzá a " - Diablo" tennivalót a lista végére, 2 szóköz indentációval
//Várt eredmény:
//My todos:
// - Buy milk
// - Download games
//     - Diablo

'Use strict:'

let todoText = " - Buy milk \n - Download games\n   -Diabo";
let firstLine = 'My todos: \n'
todoText = firstLine.concat(todoText)

console.log(todoText);

// vaaagy

let todoText2 = " My todos: \n - Buy milk \n - Download games\n   -Diabo";

console.log(todoText2);

