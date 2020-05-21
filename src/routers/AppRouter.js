import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
	<Router basename={'the-movie-box'}>
		<div className="wrapper" >
			<Header />
			<Nav />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;
