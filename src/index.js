import './style.css';
import {
    hideHome,
    loadHome,
} from './home.js';
import loadHeader from './header.js';
import {
    hideContact,
    loadContactPage,
} from './contact';
import {
    hideMenu,
    loadMenu,
} from './menu';
import loadCredits from './credits.js';

// Load default home page
loadCredits();
loadHeader();
loadHome();

const home = document.getElementById('home');
// Set home as active by default
home.classList.add('active');
home.addEventListener('click', () => {
    home.classList.add('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
    // Hide the other pages
    hideMenu();
    hideContact();
    // Display the home page 
    loadHome();
});

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    menu.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
    // Hide the other pages
    hideHome();
    hideContact();
    loadMenu();
});

const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    contact.classList.add('active');
    menu.classList.remove('active');
    home.classList.remove('active');
    // Hide the other pages
    hideHome();
    hideMenu();
    // Display the contact page
    loadContactPage();
});