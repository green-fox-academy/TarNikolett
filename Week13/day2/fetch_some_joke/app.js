let containerOfJokes = document.getElementById('container');
let div = document.getElementById('div');

document.getElementById('button').onclick = function (event){
    fetch('http://api.icndb.com/jokes/random')
    .then(function (response){
        return response
    })
    .then( function(response){
        return response.json();
    })
    .then(function (response){
        div.innerHTML += '<p>' + response.value.joke + '</p>';
    })
    .catch(reject => alert(reject.message))
};


