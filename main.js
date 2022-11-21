const btn = document.querySelector('button');
const text = document.querySelector('input');
const ul_list = document.querySelector('ul');

let items;

if (localStorage.getItem('items')) {
    items = localStorage.getItem('items').split(',');
} else {
    items = [];
}

function addItem(itemName) {
    let newItem = document.createElement('li');
    newItem.textContent = itemName;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';

    deleteBtn.onclick = function (e) {
        ul_list.removeChild(newItem);
        items.splice(items.indexOf(itemName), 1);
        localStorage.setItem('items', items);
    }

    ul_list.appendChild(newItem);
    newItem.appendChild(deleteBtn);
}

function inputItem() {
    if (text.value != '') {
        let myItem = text.value;
        text.value = '';
        console.log(myItem);
        items.push(myItem);

        addItem(myItem);

        text.focus();
        localStorage.setItem('items', items);
    }
}


function recovery_items() {
    for (let i = 0; i < items.length; i++) {
        addItem(items[i]);
    }
}

recovery_items();

btn.onclick = inputItem();
window.document.onkeydown = function (e) {
    if (e.key == 'Enter') {
        inputItem();
    }
}

text.focus();