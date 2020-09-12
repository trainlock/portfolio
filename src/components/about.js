import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";

import portrait from './../images/linnea-grayscale.jpg';

class About extends Component {
	render() {
		return (
			<div className="about-body vertical-center">
				<Container className="about-grid">
					<div className="about-head">
						<Row className="about-top-content">
							<Col col={6} className="about-img">
								{/*style={{ backgroundImage: 'url(' + portrait + ')' }}>*/}
								<img className="portrait-img"
										 src={ portrait }
										 alt="Portrait Image"
								/>
							</Col>
							<Col col={6}>
								<div className="about-info">
									<h2 className="about-title">About Me</h2>
									<p className="text-left">My name is Linnea Bergman,
										I’m 24 years old and currently studying MSc in Media Technology and Engineering at
										Linköping University in Sweden.
										</p>
									<p className="text-left">
										I first came in contact with computer graphics, programming and simulations at the University
										and got hooked. The mixture of logic and creativity appealed to me and it is something which
										I have become passionate about. My free time is spent on various projects, either related to
										the University or of my own accord, where I can be both logical and creative.
									</p>
									<p className="text-left">
										Apart from programming, I am often running in the city or the forest.
										Discovering new places or technologies is one of the things that inspire me daily.
									</p>
								</div>
							</Col>
						</Row>
					</div>
					<div className="about-bottom-content">
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Work Experience</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>Head of Education, Student Council LinTek, Linköping University</p>
									<p>M.S thesis position / Intern, Goodbye Kansas Studios</p>
									<p>Teaching Assistant, Linköping University</p>
									<p>Software Engineering Intern, SAAB</p>
									<p>Form Teacher, Linköping University</p>
									<p>Software Engineering Intern, Westermo</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2020</p>
									<p>Autumn 2019</p>
									<p>Autumn 2018</p>
									<p>Summer 2017</p>
									<p>Autumn 2016</p>
									<p>Summer 2015</p>
								</Col>
							</Row>
						</div>
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Education</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>MSc Media Technology and Engineering, Linköping University</p>
									<p>Exchange Semester, Waseda University, Tokyo</p>
									<p>MSc Computer Science and Engineering, Linköping University</p>
									<p>Kudan Institute of Japanese Language and Culture, Tokyo</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2015-2020</p>
									<p>Spring 2019</p>
									<p>2014-2015</p>
									<p>2013-2014</p>
								</Col>
							</Row>
						</div>
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Non-Profit Work</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>Welcoming Committée for 200 new students, Linköping University</p>
									<p>Head of Marketing, Career Fair LARM, Linköping University</p>
									<p>Studentfiket, On-campus café, Linköping University</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2018</p>
									<p>2017-2018</p>
									<p>2015-2016</p>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</div>
		)
	}
}

export default About;