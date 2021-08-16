import './style.css';
import {
    displayHome,
    hideHome,
    loadHome,
} from './home.js';
import loadHeader from './header.js';
import {
    displayContact,
    hideContact,
    loadContactPage,
} from './contact';
import {
    displayMenu,
    hideMenu,
    loadMenu,
} from './menu';
import loadCredits from './credits.js';

// Load default home page
loadCredits();
loadHeader();
loadHome();
// Load and hide the other pages
loadMenu();
loadContactPage();
hideMenu();
hideContact();

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
    displayHome();
});

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    menu.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
    // Hide the other pages
    hideHome();
    hideContact();
    // Display the menu
    displayMenu();
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
    displayContact();
});