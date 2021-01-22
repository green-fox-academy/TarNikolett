let body = document.querySelector('body');
let ulList = document.createElement('ul');
let list = ['bread', 'milk', 'orange', 'tomato']
for (let i = 0; i < list.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = list[i];
    ulList.appendChild(liElement);
}

let div = document.createElement('div');
let buttonTextList = ['Up', '>', 'X', 'Down'];
for (let i = 0; i < buttonTextList.length; i++) {
    let button = document.createElement('button');
    button.textContent = buttonTextList[i];
    div.appendChild(button);
};
body.appendChild(ulList);
body.appendChild(div);

let emptyDiv = document.createElement('container');
body.appendChild(emptyDiv);

let focus = document.querySelector('li').style.background = 'lightgray ';