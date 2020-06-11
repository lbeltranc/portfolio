import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Nav from '../components/Nav';
import Hamburger from '../components/Hamburguer';

const Header = () => {

	const [openMenu, setOpenMenu] = useState(false);

	return(
		<header>
			<Link to={'/'}>
				<img src={logo} alt="logo" className="logo" />
			</Link>
				<div className="burger-menu">
				<Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu}/>
				</div>
				<Nav openMenu={openMenu}/>
		</header>
);}

export default Header;