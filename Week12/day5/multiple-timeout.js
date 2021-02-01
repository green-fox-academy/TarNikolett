/* Írj egy programot, ami az alábbi gyümölcsöket íratja ki a konzolra!
"alma" -> azonnal
"barack" -> 1 másodperc után
"dinnye" -> 3 másodperc után
"mandarin" -> 5 másodperc után
*/

function writeSomething() {
    console.log("alma");
    setTimeout(() => {
        console.log('barack')
    }, 1000);
    setTimeout(() => {
        console.log("dinnye")
    }, 3000);
    setTimeout(() => {
        console.log("mandarin")
    }, 5000);
};
writeSomething();