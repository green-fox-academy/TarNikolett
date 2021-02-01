'use strict';

const baseAPIUrl = 'https://swapi.dev/api/';

document.querySelector('button').addEventListener( 'click' , () => {
    sendRequest('GET' , `${baseAPIUrl}people/`,null, (response) => {
        const searchName = document.get
    })
})

function sendRequest ( method, url, ody, callback){
    const request = new XMLHttpRequest();
    request.open(method,url);
    request.onload = () => {
        callback(JSON.parse(request.response))
    }
    request.send(body)
};