const main = document.createElement('main');

// Load the main content of the page
function loadHome() {
    if (main.classList.contains('inactive')) {
        main.classList.remove('inactive');
    }

    const div = document.createElement('div');
    div.id = 'description';

    const descriptions = ['Tastiest food around', 'Family-Owned', 'Monday - Saturday: 9AM - 10PM', 'Sunday: 10AM - 8PM'];

    // Create the text elements with their respective descriptions
    for (let i = 0; i < descriptions.length; i++) {
        const p = document.createElement('p');

        p.textContent = descriptions[i];
        div.appendChild(p);
    }

    // Create and add the order button to the home page
    const button = document.createElement('button');
    button.textContent = 'Order now!';
    div.appendChild(button);

    main.appendChild(div);

    document.body.appendChild(main);
}

// Hides and resets content
function hideHome() {
    main.classList.toggle('inactive');
    main.innerHTML = null;
}

export {
    loadHome,
    hideHome
}