import React from "react";
import logo from './images/logo.png';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


const Navbar =() => {
    return(
        <header>
        <div className="logo">
        <img src={logo} className="" alt="logo" />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="./about.html" className="nav__link">About US</a></li>
                <li className="nav__item"><a href="./contact.html" className="nav__link">Contact US</a></li>

            </ul>
            
        </nav>

    
    </header>
    )
};

export default Navbar;