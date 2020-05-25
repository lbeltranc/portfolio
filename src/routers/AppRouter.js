import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import ProjectSingle from '../components/ProjectSingle';
import PageNotFound from '../components/PageNotFound';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const AppRouter = () => (
	<Router>
		<div className="wrapper" >
			<header>
				<Link to={'/'}>
					<img src={logo} alt="logo" className="logo" />
				</Link>
				<Nav />
			</header>
			
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/project-single'} exact><ProjectSingle /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;
