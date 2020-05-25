import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Nav = () => {
    
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'} exact>Home</NavLink></li>
                <li><Link smooth to="/#about">About</Link></li>
                <li><Link smooth to="/#projects">Projects</Link></li>
                <li><Link smooth to="/#contact">Contact</Link></li>
            </ul>

            <button class="hamburger" id="hamburger">
                <span class="hamburger-content">
                    <span class="text">Menu</span>
                    <span class="bar"></span>
                </span>
            </button>
        </nav>
    );
}

export default Nav;