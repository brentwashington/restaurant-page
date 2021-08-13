import GithubIcon from './images/github-logo.png';

function loadCredits() {
    const credits = document.createElement('div');
    credits.id = 'credits';

    const div = document.createElement('div');
    div.className = 'credits-content';

    const p = document.createElement('p');

    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/BrentWashington');

    const img = document.createElement('img');
    img.src = GithubIcon;
    img.alt = 'Github Logo';

    const myName = document.createTextNode('Brent Washington');
    const faviconCredit = document.createTextNode('Favicon made by turkkub from www.flaticon.com');

    const secondDiv = document.createElement('div');
    secondDiv.className = 'credits-content';

    a.appendChild(img);
    p.append(myName, a);
    div.appendChild(p);
    secondDiv.appendChild(faviconCredit);
    credits.appendChild(div);
    credits.appendChild(secondDiv);

    document.body.appendChild(credits);
}

export default loadCredits;