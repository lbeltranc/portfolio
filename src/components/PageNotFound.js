import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
	<main className="not-found">
		<section className="not-found-cont">
			<div className="page-info">
				<h2>404<br /> Oops! Page Not Found</h2>
				<i className="fas fa-frown-open"></i>
			</div>
			<div className="back-home">
				<Link to={'/'} className="btn">back to home</Link>
			</div>
		</section>
	</main>
);

export default PageNotFound;