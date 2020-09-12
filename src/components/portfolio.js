import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

import masterThesis from "./projects/project-img/masterThesis.png";
import flubber from "./projects/project-img/flubber.png";
import moa from "./projects/project-img/cow.png";

class Portfolio extends Component {
	handleClick = () => {
		return <Redirect to={ "/about" } />
	}
	
	render() {
		return (
			<div className="portfolio-body vertical-center">
				<Container className="portfolio-grid">
					<div className="portfolio-head">
						{/*
							 style={{
							 	backgroundImage: 'url(' + codeImg + ')',
								 opacity: 0.1,
								 filter: 'blur(10px), sepia(60%)'
							 }}	>
							 */}
						<Row>
							<Col col={12}>
								<h2 id="portfolio-title" >Portfolio</h2>
							</Col>
						</Row>
					</div>
					<div className="portfolio-content">
						{/* TODO: Byt ut detta mot en map */}
						<Row className="portfolio-item">
							<Col col={6} className="portfolio-item-img">
								<img className="portfolio-img"
									src={ masterThesis }
									alt="Microstructure deformations on a facial mesh"
								/>
							</Col>
							<Col col={6} className="portfolio-text">
								<div>
									<h3>Dynamic Microstructure Deformation</h3>
									<p>
										In the master thesis project, an application that can add dynamic microstructure
										deformations to the skin on realistic digital humans. By stretching and compressing
										the skin, the microscopic wrinkles and pores can dynamically be altered, increasing
										the sense of realism.
									</p>
									{/*
									<div className="portfolio-button">
										<Link to={"/pOne"}>
											<button className="square-btn" >Read more</button>
										</Link>
									</div>
									*/}
									<div className="aboutme-button">
										<Link to={"/master-thesis"}>
											<button className="button type1 btn-about">Read more</button>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
						<Row className="portfolio-item">
							<Col col={6} className="portfolio-item-img">
								<img className="portfolio-img"
									src={ flubber }
									alt="Soft body deformer"
								/>
							</Col>
							<Col col={6} className="portfolio-text">
								<div>
									<h3>Flubber Deformer</h3>
									<p>
										Implemented a Maya plugin-node for a flubber or jelly deformer for the course
										SFX - Tricks of the Trade. The plugin was written in Python and deforms simple
										shapes into a jelly-like substance.
									</p>
									{/*
									<div className="portfolio-button">
										<Link to={"/project"}>
											<button className="square-btn">Read more</button>
										</Link>
									</div>
									*/}
									<div className="aboutme-button">
										<Link to={"/flubber"}>
											<button className="button type1 btn-about">Read more</button>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
						<Row className="portfolio-item">
							<Col col={6} className="portfolio-item-img">
								<img className="portfolio-img"
									src={ moa }
									alt="Decimated cow from modelling and animation lab"
								/>
							</Col>
							<Col col={6} className="portfolio-text">
								<div>
									<h3>Modelling and Animation</h3>
									<p>
										The course Modelling and Animation consisted of a series of lab sessions focusing on
										representing and modifying 3D surfaces. The labs' covered techniques such as mesh
										decimation, level-set method, splines and subdivision and a physics-based simulation of fluid.
									</p>
									<div className="portfolio-button">
										<Link to={"/moa"}>
											<button className="button type1">Read more</button>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
						<div className="portfolio-button" id="portfolio-btn-projects">
							<Link to={"/projects"}>
								<button className="button type1">See All Projects</button>
							</Link>
						</div>
						{/*
						<div className="buttons-cell">
							<button className="custom-btn btn-6"><span>Read More</span></button>
						</div>
						*/}
					</div>
				</Container>
			</div>			
		)
	}
}

export default Portfolio;