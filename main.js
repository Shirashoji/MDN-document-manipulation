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
        items.splice(items.indexOf(myItem), 1);
    }

    ul_list.appendChild(newItem);
    newItem.appendChild(deleteBtn);
}

function recovery_items() {
    for (let i = 0; i < items.length; i++) {
        addItem(items[i]);
    }
}

recovery_items();

function inputItem() {
    if (text.value != '') {
        let myItem = text.value;
        text.value = '';
        console.log(myItem);
        items.push(myItem);
        let newItem = document.createElement('li');
        newItem.textContent = myItem;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';

        deleteBtn.onclick = function (e) {
            ul_list.removeChild(newItem);
            items.splice(items.indexOf(myItem), 1);
        }

        ul_list.appendChild(newItem);
        newItem.appendChild(deleteBtn);

        text.focus();
        localStorage.setItem('items', items);
    }
}

btn.onclick = inputItem();
window.document.onkeydown = function (e) {
    if (e.key == 'Enter') {
        inputItem();
    }
}

text.focus();