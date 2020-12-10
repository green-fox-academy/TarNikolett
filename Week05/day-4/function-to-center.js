// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const w = canvas.width;
const h = canvas.height;

// const color = ["red", "blue", "purple", "pink", "green"];
// const rndColor = Math.round(Math.random()*color.length-1);

function drawLine(x, y) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(w / 2, h / 2);
    ctx.stroke();
}

//drawLine(50,60)

function drawLines() {
    const step = 20;

    ctx.beginPath();

    for (let i = 0; i <= w; i += step) {
        ctx.moveTo(i, 0);
        ctx.lineTo(w / 2, h / 2);
        ctx.moveTo(i, h);
        ctx.lineTo(w / 2, h / 2);
    }

    for (let j = 0; j <= h; j += step) {
        ctx.moveTo(0, j);
        ctx.lineTo(w / 2, h / 2);
        ctx.moveTo(w, j);
        ctx.lineTo(w / 2, h / 2);
    }

    ctx.stroke();
}

drawLines();