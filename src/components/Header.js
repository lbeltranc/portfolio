import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
    	<Link to={'/'}>
			<h1>Logo</h1>
			{/* <img src={logo} alt="logo" /> */}
		</Link>
	</header>
);


export default Header;