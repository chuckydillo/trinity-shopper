console.log("connected")

//let grocery = document.getElementById('grocery');
//grocery.addEventListener('submit', addItem);
//function addItem(e){
//e.preventDefault();
//let data = this.elements.writeList.value;
//let list = document.querySelector('ol');
//let item = document.createElement('li');
//let text = document.createElement('p');

//text.textContent = data;
//this.elements.writeList.value = "";
//item.append(text);
//list.append(item);

//let rmvBtn = document.createElement('span');
//rmvBtn.classList.add('remove');
//item.append(rmvBtn);
//rmvBtn.addEventListener('click' , deleteItem);
//}


const form = document.getElementById('recipeForm');
const recipeName = document.getElementById('recipeName');
const recipeList = document.getElementById('recipeList');
const recipeButton = document.getElementById('recipeButton');
const ingridentButton = document.getElementById('ingridentButton');
const PrintRecipeName = document.getElementById('PrintRecipeName');


//function for creating recipe name
document.getElementById('recipeButton').addEventListener('click', function() {

        // Get the value from the input field
        const recipeName = document.getElementById('recipeName').value;

        // Get the element where the recipe name will be printed
        const printRecipeNameElement = document.getElementById('printRecipeName');

        // Set the text content of the output element to the recipe name
        printRecipeNameElement.textContent = recipeName;
});


document.getElementById('ingridentAdd').addEventListener('click', function() {

    // Get the values from the input fields
    const ingridentNameValue = document.getElementById('ingridentName').value;
    const quantityValue = document.getElementById('quantity').value;
    const unitMeasurementValue = document.getElementById('unitMeasurement').value;

    // Create the list item
    const listItem = document.createElement('li');

    // Create the span elements
    const ingridentNameSpan = document.createElement('span');
    ingridentNameSpan.textContent = ingridentNameValue;
    ingridentNameSpan.id = 'ingrident-name';

    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = ` ${quantityValue} `;
    quantitySpan.id = 'ingrident-quantity';

    const unitMeasurementSpan = document.createElement('span');
    unitMeasurementSpan.textContent = unitMeasurementValue;
    quantitySpan.id = 'ingrident-unit-measurement';

    // Append the spans to the list item
    listItem.appendChild(ingridentNameSpan);
    listItem.appendChild(quantitySpan);
    listItem.appendChild(unitMeasurementSpan);

    // Append the list item to the details list
    document.getElementById("recipeList").appendChild(listItem);

    let rmvBtn = document.createElement('span');
    rmvBtn.classList.add('remove');
    listItem.append(rmvBtn);
    rmvBtn.addEventListener('click' , deleteItem);
});


function deleteItem(e){
    this.parentElement.remove();  
}