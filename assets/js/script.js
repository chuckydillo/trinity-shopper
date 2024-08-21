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

// JS for adding ingredients
document.getElementById('ingridentAdd').addEventListener('click', function() {

    // Gets the values from the input fields
    const ingridentNameValue = document.getElementById('ingridentName').value;
    const quantityValue = document.getElementById('quantity').value;
    const unitMeasurementValue = document.getElementById('unitMeasurement').value;

    // Create elements section along with IDs
    const listItem = document.createElement('li');
    const ingridentNameSpan = document.createElement('span');
    ingridentNameSpan.textContent = ingridentNameValue;
    ingridentNameSpan.id = 'ingrident-name';

    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = ` ${quantityValue} `;
    quantitySpan.id = 'ingrident-quantity';

    const unitMeasurementSpan = document.createElement('span');
    unitMeasurementSpan.textContent = unitMeasurementValue;
    unitMeasurementSpan.id = 'ingrident-unit-measurement';

    // Append the list element
    document.getElementById("recipeList").appendChild(listItem);

    // Append the spans to the list elelement
    listItem.appendChild(ingridentNameSpan);
    listItem.appendChild(quantitySpan);
    listItem.appendChild(unitMeasurementSpan);

    // Remove button for list element
    let rmvBtn = document.createElement('span');
    rmvBtn.textContent = 'Remove';
    rmvBtn.classList.add('remove');
    listItem.append(rmvBtn);
    rmvBtn.addEventListener('click' , deleteItem);
});

// JS for deleting recipe ingredient list elements
function deleteItem(e){
    this.parentElement.remove();  
}

// Recipe instructions enable/disable 
const recipeinstructions = document.getElementById('recipe-instructions');
const confirmRecipeinstructions = document.getElementById('confirm-input-recipe-instructions');
const editRecipeinstructions = document.getElementById('edit-input-recipe-instructions');

confirmRecipeinstructions.addEventListener('click', function() {
    recipeinstructions.disabled = true;
});

editRecipeinstructions.addEventListener('click', function() {
    recipeinstructions.disabled = false;
});