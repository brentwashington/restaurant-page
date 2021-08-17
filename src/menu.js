const grid = document.createElement('div');

function loadMenu() {
    const menu = [
        'Supreme Nachos',
        'Spicy Beef Nachos',
        'Mozzarella Sticks',
        'Fresh-Cut French Fries',
        'Regular French Fries',
        'Ginger Kombucha'
    ]

    const images = [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nachos-supreme-horizontal-1547669254.png',
        'https://www.mexicanplease.com/wp-content/uploads/2017/02/beef-nachos-just-out-of-the-oven-on-sheet-tray.jpg',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/11/0/EI1D01_mozzarella-sticks_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545262464.jpeg',
        'https://www.foodnetwork.com/content/dam/images/food/video/0/01/013/0137/0137122.jpg',
        'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
        'https://savingdollarsandsense.com/wp-content/uploads/2020/03/Ginger-Kombucha-recipe-8-scaled.jpg'
    ]

    for (let i = 0; i < menu.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('dish-image');
        img.src = images[i];

        const cardContents = document.createElement('div');
        cardContents.classList.add('card-contents');

        const heading = document.createElement('h4');

        heading.textContent = menu[i];


        cardContents.appendChild(heading);
        card.appendChild(img);
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