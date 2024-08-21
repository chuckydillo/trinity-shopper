
//navbar

document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('navbar-container');

    if (navContainer) {
        fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
    }
});
