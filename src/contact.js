const div = document.createElement('div');
div.id = 'card';

function loadContactPage() {
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

    document.body.appendChild(div);
}

export default loadContactPage;