'use strict'

const API_KEY = 'Hfv7n5ZphOo3WE57Sv0n1XY7oO2mt4YK';
const baseAPIUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=16&rating=g`;

const button = document.querySelector('button');
const main = document.querySelector('main');
button.addEventListener("click", () => {
    sendRequest('GET', baseAPIUrl, null, (response) => {
        console.log(response);
        const massGifs = response.data;
        massGifs.forEach(singleGif => {
            const img = document.createElement('img');
            const a = document.createElement('a');
            a.setAttribute('href', singleGif.url)
            img.setAttribute('src', singleGif.images['480w_still'].url);
            a.appendChild(img);
            main.appendChild(a);
        });
    });
});
function sendRequest(method, url, body, callback) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = () => {
        callback(JSON.parse(request.response));
    };
    request.send(body);
};
