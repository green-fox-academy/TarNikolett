let likeCatsButton = document.querySelector('#like-cats');
let subscribeButton = document.querySelector('#Feliratkozás');

document.querySelector("#Cica").addEventListener('click', () => {
    subscribeButton.removeAttribute('disabled');
});

document.querySelector("#Kutya").addEventListener('click', () => {
    subscribeButton.removeAttribute('disabled');
});

document.querySelector('#Aranyhal').addEventListener('click', () => {
    subscribeButton.setAttribute('disabled', 'true');
});

document.querySelector('#igen').addEventListener('click', () => {
    likeCatsButton.removeAttribute('disabled');
});
subscribeButton.addEventListener('click', () => {
    alert('Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre ')
});





