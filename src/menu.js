const grid = document.createElement('div');

function loadMenu() {
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

function displayMenu() {
    grid.classList.remove('inactive');
    grid.classList.add('card-grid');
}

function hideMenu() {
    grid.classList.remove('card-grid');
    grid.classList.add('inactive');
}

export {
    loadMenu,
    displayMenu,
    hideMenu
}