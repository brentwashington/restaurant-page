import './style.css';
import GithubIcon from './github-logo.png';

// Content container
const content = document.getElementById('content');

// Header
const header = document.createElement('header');
const heading = document.createElement('h1');
const headingText = document.createTextNode('Three Corners');

heading.appendChild(headingText);
header.appendChild(heading);
content.appendChild(header);

// Main content
const main = document.createElement('main');
const descDiv = document.createElement('div');
descDiv.id = 'description';
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const nachosDesc = document.createTextNode('Tastiest nachos around');
const familyOwnedDesc = document.createTextNode('Family-Owned');

p1.appendChild(nachosDesc);
p2.appendChild(familyOwnedDesc);
descDiv.append(p1, p2);
main.appendChild(descDiv);
content.appendChild(main);

// Footer
const footer = document.createElement('footer');

const footerDiv = document.createElement('div');
footerDiv.className = 'footer-content';

const p3 = document.createElement('p');

const a = document.createElement('a');
a.setAttribute('href', 'https://github.com/BrentWashington');

const img = document.createElement('img');
img.setAttribute('src', GithubIcon);
img.setAttribute('alt', 'Github Logo');

const myName = document.createTextNode('Brent Washington');
const faviconCredit = document.createTextNode('Favicon made by turkkub from www.flaticon.com');

const secondFooterDiv = document.createElement('div');
secondFooterDiv.className = 'footer-content';

a.appendChild(img);
p3.append(myName, a);
footerDiv.appendChild(p3);
secondFooterDiv.appendChild(faviconCredit);
footer.appendChild(footerDiv);
footer.appendChild(secondFooterDiv);
content.appendChild(footer);

// Add the content to the page
document.body.appendChild(content);
