import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import graph from './../../images/project-img/tnm085/bindningsgraf.png';
import springs from './../../images/project-img/tnm085/springs.jpg';

class TyglaDig extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">TyglaDig</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>TYGla Dig is a physics based cloth simulation using mass-spring system.
                  This cloth simulation project was a part of the course Modelling Project (TNM085) at
                  Linköping University. The goal was to make a realistic simulation based on math and physics. We
                  chose to create a cloth simulation. </i></p>
  
                <p className="project-text">The project team consisted of four members, including myself. We
                  all worked together with the various parts of the project.
                </p>
                
                <Player className="project-video"
                        playsInline
                        poster="/logos/tygladig.png"
                        src="videos/tygladig.mp4"
                />
                
                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock/TYGlaDig'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href='https://github.com/trainlock/TYGlaDig'>
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">A physically correct mass-spring system was first constructed
                  using Newtons second law of motion and Hookes law. These two laws describe how the
                  energy and how springs works.
                </p>
                
                <img className="project-img"
                     src={ graph }
                     alt="projImg"
                />
                
                <p className="project-text">The springs were constructed as a grid of particles where springs
                  and dampers kept the particles connected. At first, the spring was only horisontal and vertical.
                  For better stability in the mass-spring system, diagonal springs were added. Each particle
                  contained a mass and one or more connections to other particles. </p>
  
                <img className="project-img"
                     src={ springs }
                     alt="projImg"
                />
  
                <p className="project-text">To simulate movement of the cloth, the movement and position of each
                  particle had to be calculated as the particles were dependant on each other. The position of
                  the particles were calculated using first Euler integration and later on Runge-Kutta 4 (RK4).
                </p>
                <p className="project-text">The basics of the algorithm for simulating mass-spring systems was
                  first implemented in MATLAB, to get the math and physics working. Both Euler integration and
                  RK4 was implemented in MATLAB and the positions of the particles were visualised with graphs.
                </p>
                <p className="project-text">With the math functioning properly in MATLAB the algorithms were moved
                  into OpenGL and CMAKE. For a moving effect of the cloth, each particle and its position was
                  updated each frame. At first only gravity affected the cloth but this was expanded to allow
                  user interaction with the cloth.
                </p>
                <p className="project-text">Some future work for the cloth simulation is; adding textures and
                  lightning, collision with other objects (started but not finished) and being able to cut
                  in the fabric.
                </p>
  
                {/*
                <div className="project-button">
                  <Link to={"/projects"}>
                    <button className="square-btn">Return to Projects</button>
                  </Link>
                </div>
                */}
                <div className="project-button">
                  <Link to={"/projects"}>
                    <button className="button type1">Return to Projects</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default TyglaDig;