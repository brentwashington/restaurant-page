import './style.css';
import loadHome from './home.js';
import loadHeader from './header.js';
import loadFooter from './footer.js';

loadHeader();
loadHome();
loadFooter();

const home = document.getElementById('home');
// Set home as active by default
home.classList.add('active');
home.addEventListener('click', () => {
    home.classList.add('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
});

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    menu.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
});

const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    contact.classList.add('active');
    menu.classList.remove('active');
    home.classList.remove('active');
});