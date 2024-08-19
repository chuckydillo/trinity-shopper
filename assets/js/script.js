console.log("connected")

let grocery = document.getElementById('grocery');
grocery.addEventListener('submit', addItem);
function addItem(e){
e.preventDefault();
let data = this.elements.writeList.value;
let list = document.querySelector('ol');
let item = document.createElement('li');
let text = document.createElement('p');

text.textContent = data;
this.elements.writeList.value = "";
item.append(text);
list.append(item);

let rmvBtn = document.createElement('span');
rmvBtn.classList.add('remove');
item.append(rmvBtn);
rmvBtn.addEventListener('click' , deleteItem);
}

function deleteItem(e){
    this.parentElement.remove();  
}

function recipeCompare() {

}