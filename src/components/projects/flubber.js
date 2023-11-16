import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import cube from './../../images/project-img/tncg13/tncg13-cube.png';
import flubber from './../../images/project-img/tncg13/tncg13-flubber.png';
import pos from './../../images/project-img/tncg13/tncg13-pos.png';
import teapot from './../../images/project-img/tncg13/tncg13-teapot.png';

class Flubber extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Flubber Deformer</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>In the course SFX - Tricks of the Trade (TNCG13) at Linköping
                  University the students got to read several state-of-the-art report for visual effects and
                  then implement one of the techniques mentioned as a final project. The aim of this project
                  was to create a Python plugin to Maya that deforms objects using shape matching. The
                  deformation should turn the objects into a jelly-like substance. </i></p>
  
                <p className="project-text">
                  This lab was done in pairs, meaning we were two that worked together to complete the task.
                  Mob-programming was used whilst developing this project which contributed to an equal work
                  load for all parties involved.
                </p>
  
                <Player className="project-video"
                        playsInline
                        poster="/logos/flubber.png"
                        src="videos/TNCG13-flubber.mp4"
                />
                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href='https://github.com/trainlock/TNCG13-SoftbodyDeformer'>
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">This project uses the method proposed by Müller et al. in their
                  paper ”Meshless Deformations Based on Shape Matching” (2005) to simulate the deformation.
                  Everything was written in Python as a Node-plugin that was loaded into Maya. Deformation
                  of a given mesh could be performed in real-time. </p>
  
                <p className="project-text">The plugin takes an input geometry and then deforms the object
                  according to the math given in ”Meshless Deformations Based on Shape Matching” and some
                  user-controlled attributes. To deform the object several different user-controlled attributes
                  were added, such as mass, stiffness and elastic forces. The deformation varies when the
                  attributes are altered. </p>
  
                <p className="project-text">The deformation is particle based and it not affected by the
                  shape of the mesh. Vertices of meshes are simulated individually as particles and after
                  each time step, the original shape gets matched against a deformed one. The deformed
                  position was computed using the neutral shape and adding external forces. When the
                  deformed position had been calculated the particles was moved to that position. Each
                  particle then strived independently towards its neutral position. This happened every
                  frame which resulted in a movement. </p>
                
                <img className="project-img"
                     src={ pos }
                     alt="projImg"
                />
                
                <p className="project-text">Three different deformations were implemented, Rigid Body Deformation,
                  Linear Deformation and Quadratic Deformation. Objects deformed in the above video uses
                  Quadratic Deformation. </p>
  
                <img className="project-img"
                     src={ cube }
                     alt="projImg"
                />
  
                <p className="project-text">For the deformation, the best quadratic transformation is found
                  and then applied to the original shape of the vertices. The vertices are then translated
                  towards their respective transformation position. The end result is a mesh that gets
                  transformed into a jelly-like substance in real-time.</p>
  
                <p className="project-text">Adding texture and render the object would add realism to the mesh.
                  To increase the speed and stability of the plugin C++ should be used instead since Python
                  does not compile at runtime. </p>
  
                <img className="project-img"
                     src={ flubber }
                     alt="projImg"
                />
                
                <img className="project-img"
                     src={ teapot }
                     alt="projImg"
                />
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

export default Flubber;