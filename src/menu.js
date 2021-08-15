const grid = document.createElement('div');
grid.id = 'card-grid';

function loadMenu() {
    if (grid.classList.contains('inactive')) {
        grid.classList.remove('inactive');
    }

    const menu = [
        'Supreme Nachos',
        'Spicy Beef Nachos',
        'Mozzarella Sticks',
        'Fresh-Cut French Fries',
        'Regular French Fries',
        'Regular French Fries',
        'Ginger Kombucha'
    ]

    for (let i = 0; i < menu.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContents = document.createElement('div');
        cardContents.classList.add('card-contents');

        const heading = document.createElement('h4');

        heading.textContent = menu[i];

        cardContents.appendChild(heading);
        card.appendChild(cardContents);

        grid.appendChild(card);
    }

    document.body.appendChild(grid);
}

// Hides and resets content
function hideMenu() {
    grid.classList.add('inactive');
    grid.innerHTML = null;
}

export {
    loadMenu,
    hideMenu
}