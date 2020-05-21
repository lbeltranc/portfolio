import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => (
	<nav>
        <ul>
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><Link smooth to="/#about">About</Link></li>
            <li><Link smooth to="/#projects">Projects</Link></li>
            <li><Link smooth to="/#contact">Contact</Link></li>
        </ul>
	</nav>
);

export default Nav;