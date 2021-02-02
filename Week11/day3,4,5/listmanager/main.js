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

let highlightedItem = document.querySelector('#bread');
highlightedItem.style.background = 'lightgrey';

let upButton = document.querySelector('#Up');
let downButton = document.querySelector('#Down');
let moveButton = document.querySelector('#Move');
let deleteButton = document.querySelector('#Delete');

downButton.onclick = () => {
    let lightgreyItemIndex = liElementArray.indexOf(highlightedItem);
    if (lightgreyItemIndex >= liElementArray.length - 1) {
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'white';
        lightgreyItemIndex = 0;
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'lightgrey';
        return
    }
    liElementArray[lightgreyItemIndex].style.background = 'white';
    highlightedItem = liElementArray[lightgreyItemIndex + 1];
    highlightedItem.style.background = 'lightgrey';
};

upButton.onclick = () => {
    //let actualHighlightedItem = 
    let lightgreyItemIndex = liElementArray.indexOf(highlightedItem);
    if (lightgreyItemIndex == liElementArray.length - 1){ 
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'white';
        lightgreyItemIndex -= 1;
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'lightgrey';
        return
    }  
    if (lightgreyItemIndex == 0){ 
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'white';
        lightgreyItemIndex = liElementArray.length -1 ;
        highlightedItem = liElementArray[lightgreyItemIndex];
        highlightedItem.style.background = 'lightgrey';
        return
    }  
    liElementArray[lightgreyItemIndex].style.background = 'white';
    highlightedItem = liElementArray[lightgreyItemIndex -1];
    highlightedItem.style.background = 'lightgrey';
};


deleteButton.onclick = () => {
    let lightgreyItemIndex = liElementArray.indexOf(highlightedItem);
    document.querySelectorAll("ul")[0].removeChild(liElementArray[lightgreyItemIndex]);

};