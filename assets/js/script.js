console.log("connected")


const form = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const recipeButton = document.getElementById('recipeButton');
const ingridentButton = document.getElementById('ingridentButton');

// Recipe name enable/disable 
const recipeName = document.getElementById('recipe-name');
const confirmRecipeName = document.getElementById('confirm-input-recipe-name');
const editRecipeName = document.getElementById('edit-input-recipe-name');



confirmRecipeName.addEventListener('click', function() {
    recipeName.disabled = true;
});

editRecipeName.addEventListener('click', function() {
    recipeName.disabled = false;
});

// Recipe discription enable/disable 
const recipeDescription = document.getElementById('recipe-description');
const confirmRecipeDescription = document.getElementById('confirm-input-recipe-description');
const editRecipeDescription = document.getElementById('edit-input-recipe-description');

confirmRecipeDescription.addEventListener('click', function() {
    recipeDescription.disabled = true;
});

editRecipeDescription.addEventListener('click', function() {
    recipeDescription.disabled = false;
});


//function for creating recipe description
document.getElementById('recipe-description-button').addEventListener('click', function() {

    // Get the value from the input field
    const recipeName = document.getElementById('recipe-description').value;

    // Get the element where the recipe name will be printed
    const printRecipeNameElement = document.getElementById('print-recipe-description');

    // Set the text content of the output element to the recipe name
    printRecipeNameElement.textContent = recipeName;
});



document.getElementById('ingridentAdd').addEventListener('click', function() {

    // Get the values from the input fields
    const ingridentNameValue = document.getElementById('ingridentName').value;
    const quantityValue = document.getElementById('quantity').value;
    const unitMeasurementValue = document.getElementById('unitMeasurement').value;

    // Create the list element
    const listItem = document.createElement('li');

    // Create the span elements with id
    const ingridentNameSpan = document.createElement('span');
    ingridentNameSpan.textContent = ingridentNameValue;
    ingridentNameSpan.id = 'ingrident-name';

    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = ` ${quantityValue} `;
    quantitySpan.id = 'ingrident-quantity';

    const unitMeasurementSpan = document.createElement('span');
    unitMeasurementSpan.textContent = unitMeasurementValue;
    unitMeasurementSpan.id = 'ingrident-unit-measurement';

    // Append the list item
    document.getElementById("recipeList").appendChild(listItem);

    // Append the spans to the list elelement
    listItem.appendChild(ingridentNameSpan);
    listItem.appendChild(quantitySpan);
    listItem.appendChild(unitMeasurementSpan);

    let rmvBtn = document.createElement('span');
    rmvBtn.textContent = 'Remove';
    rmvBtn.classList.add('remove');
    listItem.append(rmvBtn);
    rmvBtn.addEventListener('click' , deleteItem);
});


function deleteItem(e){
    this.parentElement.remove();  
}

