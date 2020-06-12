import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import ProjectSingle from '../components/ProjectSingle';
import PageNotFound from '../components/PageNotFound';
import ScrollToTop from '../utilities/ScrollToTop';
import { addBackToTop } from 'vanilla-back-to-top'

const AppRouter = () => {

	useEffect(() => {
		addBackToTop({
			diameter: 56,
			backgroundColor: '#8b0000',
			textColor: '#ebe5e5',
			scrollDuration: 500
		})
	},[]);

	return (
		<Router>
			<div className="wrapper" >
				<Header />
				<ScrollToTop />
				<Switch>
					<Route path={'/'} exact><Home /></Route>
					<Route path={'/project-single/:id'} exact><ProjectSingle /></Route>
					<Route path={'/*'}><PageNotFound /></Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default AppRouter;
