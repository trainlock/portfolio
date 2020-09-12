import React, { Component } from 'react';
import AboutMe from './aboutme';
import Portfolio from './portfolio';

class LandingPage extends Component {
	render() {
		return (
			<div className="main-container">
				<header className="App-header jumbotron vertical-center">
					<div className="container">
						<div>
							<h1 id="main-title">Linnea Bergman</h1>
							<h4 id="subtitle">MSc Media Technology and Engineering - Aspiring Technical Director</h4>
						</div>
					</div>
				</header>

				<AboutMe />
				
				<Portfolio />
			</div>
		)
	}
}

export default LandingPage;