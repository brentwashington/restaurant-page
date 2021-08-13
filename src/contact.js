const contactContainer = document.createElement('div');
contactContainer.id = 'contact-container';

function loadContactPage() {
    const div = document.createElement('div');
    div.id = 'card';

    const contactTitles = [
        'Phone',
        'Email',
        'Address'
    ];

    const contactData = [
        '214-591-3122',
        'threecorners@email.com',
        '3138 Union Street - Dallas, TX'
    ];

    for (let i = 0; i < 3; i++) {
        const heading = document.createElement('h4');
        const u = document.createElement('u');
        const p = document.createElement('p');

        p.textContent = contactData[i];
        u.textContent = contactTitles[i];
        heading.appendChild(u);

        div.appendChild(heading);
        div.appendChild(p);
    }

    contactContainer.appendChild(div);
    document.body.appendChild(contactContainer);
}

// Removes the contact page content from the screen
function removeContactPage() {
    document.body.removeChild(contactContainer);
    // Clear the div
    contactContainer.innerHTML = null;
}

export {
    loadContactPage,
    removeContactPage
}