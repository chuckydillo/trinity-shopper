# Project overview

Trinity Planner is made with the goal of helping people add and find delicious recipes along with helping them save money and optimising their shopping. Trinity Planner will aid people that struggle to plan meals, recipes and shop for the required ingredients.

## List of features

 - Navigation Bar
	 - Navigation bar featured on each page
 - Landing Page
 - Saved Recipe
 - New Recipe
 - Community Recipes
 - Generate Shopping List
 - Setting
 - Account

## UX/UI

## Testing

## Deployment

## Citation of ALL sources(code, images, text)

 -  [code snippet to help with popup box](https://www.foowebs.com/p14-How-to-confirm-before-submitting-a-form-with-popup-box)
	 - `<script LANGUAGE="JavaScript"> <!-- function confirmSubmit() { var agree=confirm("Are you sure you wish to continue?"); if (agree) return true ; else return false ; } // --> </script>`
 -   [Grocery list tutorial video used initially to construct the foundation of the JS. The only remnants of the code left in are the functionality for the remove button.](https://www.youtube.com/watch?v=a6Y0GMmMMOI)
 - use of chatgpt to assist with JS for loading a nav bar.
	 - `// loadNavbar.js document.addEventListener('DOMContentLoaded', function() { // Get the element where the navigation bar will be injected const navContainer = document.getElementById('navbar-container'); // Check if the navContainer exists if (navContainer) { // Fetch the navigation bar HTML fetch('navbar.html') .then(response => response.text()) .then(data => { // Inject the fetched HTML into the container navContainer.innerHTML = data; }) .catch(error => console.error('Error loading the navbar:', error)); } });`

## Future features

## Known Bugs
