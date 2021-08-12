// Load the main content of the page
function loadHome() {
    const main = document.createElement('main');
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

export default loadHome;
