const nav = document.createElement('nav');

function loadHeader() {
    const header = document.createElement('header');
    const headingText = document.createTextNode('Three Corners');
    const heading = document.createElement('h1');

    // Load the navigation bar in the header
    loadNavBar();
    header.appendChild(nav); 
    // Add header title to the heading element
    heading.appendChild(headingText);
    // Add the heading element to the header container
    header.appendChild(heading);

    document.body.appendChild(header);
}

// Create and display the navigation bar
function loadNavBar() {
    const list = document.createElement('ul');
    const titles = ['Home', 'Menu', 'Contact'];
    const ids = ['home', 'menu', 'contact'];

    // Create list elements with respective attributes
    for (let i = 0; i < 3; i++) {
        const listItem = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = titles[i];
        a.id = ids[i];
        a.href = '#';

        listItem.appendChild(a);
        list.appendChild(listItem);
    }

    nav.appendChild(list);
}

export default loadHeader;