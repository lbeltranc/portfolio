import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => (
	<header>
    	<Link to={'/'}>
			<img src={logo} alt="logo" className="logo" />
		</Link>
	</header>
);


export default Header;