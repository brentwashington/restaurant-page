import './style.css';
import { loadHome, removeHome } from './home.js';
import loadHeader from './header.js';
import { loadContactPage, removeContactPage } from './contact';
import loadCredits from './credits.js';

// Load home page with header and footer
loadCredits();
loadHeader();
loadHome();

const home = document.getElementById('home');
// Set home as active by default
home.classList.add('active');
home.addEventListener('click', () => {
    if (home.classList.contains('active')) {
        // Do nothing
        return;
    } else {
        home.classList.add('active');
        menu.classList.remove('active');
        contact.classList.remove('active');
        // Remove the contact page content
        removeContactPage();
        // Display the home page 
        loadHome();
    }
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
    // Remove the home page content
    removeHome();
    // Display the contact page
    loadContactPage();
});
