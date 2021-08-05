function loadHeader() {
    const headingText = document.createTextNode('Three Corners');
    const heading = document.createElement('h1');
    heading.appendChild(headingText);

    const header = document.createElement('header');
    header.appendChild(heading);

    document.body.appendChild(header);
}

export default loadHeader;