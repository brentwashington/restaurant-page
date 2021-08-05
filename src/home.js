// Load the main content of the page
function loadHome() {
    const main = document.createElement('main');
    const div = document.createElement('div');
    div.id = 'description';
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const nachosDesc = document.createTextNode('Tastiest nachos around');
    const familyOwnedDesc = document.createTextNode('Family-Owned');

    p1.appendChild(nachosDesc);
    p2.appendChild(familyOwnedDesc);
    div.append(p1, p2);
    main.appendChild(div);

    document.body.appendChild(main);
}

export default loadHome;
