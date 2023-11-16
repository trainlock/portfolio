import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

import portrait from './../images/linnea-sun.jpeg';

class AboutMe extends Component {
	render() {
		return (
			<div className="aboutme-body vertical-center">
				<Container className="aboutme-grid">
					<div className="aboutme-content">
						<Row>
							<Col col={6}>
								<img className="portrait-img rounded-img"
									src={ portrait }
									alt="portrait"
								/>
							</Col>
							<Col md="12" lg="6" className="aboutme-text">
								<div>
									<h2>Hiya!</h2>
									<p>
										What is this page, you may ask? It is a page where I, and future employers, can keep track
										of what I have done throughout the years. It functions like a descriptive photo album
										and an extended resumé.
									</p>
									{/*
									<div className="aboutme-button">
										<Link to={"/about"}>
											<button className="square-btn btn-about" >About me</button>
										</Link>
									</div>
									*/}
									<div className="aboutme-button">
										<Link to={"/about"}>
											<button className="button type1 btn-about">About me</button>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		)
	}
}

export default AboutMe;