let body = document.querySelector('body');
let ulList = document.createElement('ul');
let list = ['bread', 'milk', 'orange', 'tomato'];
let liElementArray = [];
for (let i = 0; i < list.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = list[i];
    liElement.setAttribute('id', list[i]);
    ulList.appendChild(liElement);
    liElementArray.push(liElement);
}
let div = document.createElement('div');
let buttonTextList = ['Up', '>', 'X', 'Down'];
let buttonIdList = ['Up', 'Move', 'Delete', 'Down'];
for (let i = 0; i < buttonTextList.length; i++) {
    let button = document.createElement('button');
    button.textContent = buttonTextList[i];
    button.setAttribute('id', buttonIdList[i]);
    div.appendChild(button);
};
body.appendChild(ulList);
body.appendChild(div);
let emptyDiv = document.createElement('container');
body.appendChild(emptyDiv);

let highlightedItem = document.querySelector('#bread').style.background = 'lightgrey';

let upButton = document.querySelector('#Up');
let downButton = document.querySelector('#Down');
let moveButton = document.querySelector('#Move');
let deleteButton = document.querySelector('#Delete');

downButton.onclick = () => {
    for (let i = 0; i < liElementArray; i++) {
        console.log(liElementArray[i]);
        if (liElementArray[i].style.background = 'lightgrey') {
            liElementArray[i].style.background = 'white';
            liElementArray[i + 1].style.background = 'lightgrey';
        }
    }
};
