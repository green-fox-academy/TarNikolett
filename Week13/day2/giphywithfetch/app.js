const baseAPIUrl = `https://api.giphy.com/v1/gifs/trending?api_key=Hfv7n5ZphOo3WE57Sv0n1XY7oO2mt4YK&limit=16&rating=g`;
const button = document.querySelector('button');
const main = document.querySelector('main');

button.onclick = function () {
    fetch(baseAPIUrl)
        .then(function (response) {
            return response
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
             response.data.forEach( oneGif => {
                let img = document.createElement('img');
                let link = document.createElement('a');
                link.setAttribute('href', oneGif.url);
                img.setAttribute('src', oneGif.images['480w_still'].url);
                link.appendChild(img);
                main.appendChild(link);
             }); 
            
        })
}