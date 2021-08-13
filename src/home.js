const main = document.createElement('main');

// Load the main content of the page
function loadHome() {
    const div = document.createElement('div');
    div.id = 'description';

    const descriptions = ['Tastiest nachos around', 'Family-Owned'];

    // Create the text elements with their respective descriptions
    for (let i = 0; i < 2; i++) {
        const p = document.createElement('p');

        p.textContent = descriptions[i];
        div.appendChild(p);
    }

    main.appendChild(div);

    document.body.appendChild(main);
}

// Removes the home content from the screen
function removeHome() {
    document.body.removeChild(main);
    // Clear the content container
    main.innerHTML = null;
}

export { loadHome, removeHome }
