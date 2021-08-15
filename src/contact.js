const contactContainer = document.createElement('div');
contactContainer.id = 'contact-container';

function loadContactPage() {
    if (contactContainer.classList.contains('inactive')) {
        contactContainer.classList.remove('inactive');
    }

    const div = document.createElement('div');
    div.id = 'contact-card';

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

// Hides and resets content
function hideContact() {
    contactContainer.classList.toggle('inactive');
    contactContainer.innerHTML = null;
}

export {
    loadContactPage,
    hideContact
}