import GithubIcon from './images/github-logo.png';

function loadFooter() {
    const footer = document.createElement('footer');

    const div = document.createElement('div');
    div.className = 'footer-content';

    const p = document.createElement('p');

    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/BrentWashington');

    const img = document.createElement('img');
    img.src = GithubIcon;
    img.alt = 'Github Logo';

    const myName = document.createTextNode('Brent Washington');
    const faviconCredit = document.createTextNode('Favicon made by turkkub from www.flaticon.com');

    const secondDiv = document.createElement('div');
    secondDiv.className = 'footer-content';

    a.appendChild(img);
    p.append(myName, a);
    div.appendChild(p);
    secondDiv.appendChild(faviconCredit);
    footer.appendChild(div);
    footer.appendChild(secondDiv);

    document.body.appendChild(footer);
}

export default loadFooter;