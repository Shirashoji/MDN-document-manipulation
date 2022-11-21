const btn = document.querySelector('button');
const text = document.querySelector('input');
const items = document.querySelector('ul');

function addItem() {
    if (text.value != '') {
        let myItem = text.value;
        text.value = '';
        console.log(myItem);
        let newItem = document.createElement('li');
        newItem.textContent = myItem;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';

        deleteBtn.onclick = function (e) {
            items.removeChild(newItem);
        }

        items.appendChild(newItem);
        newItem.appendChild(deleteBtn);

        text.focus();
    }
}

btn.onclick = addItem;
window.document.onkeydown = function (e) {
    if (e.key == 'Enter') {
        addItem();
    }
}

text.focus();