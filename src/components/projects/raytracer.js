import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
//import { Player } from 'video-react';

import mix from './../../images/project-img/tncg15/mc_cube_glas_mirror_suzanne_128_3i.png';
import dragon from './../../images/project-img/tncg15/mc_pm_dragon_3i_photon.png';

class Project extends Component {
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
                <h2 className="project-title">Monte Carlo Ray Tracer</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>This project was a part of the course Advanced
                    Global Illumination and Rendering (TNCG15) at Linköping University and the aim was to create 
                    a functional ray tracer that could handle difficult lightning.</i></p>
                    
                <p className="project-text">The Monte Carlo ray tracer is based on the Whitted ray tracer, with perfect 
                    reflection and refraction, with the addition that it can create effects such as colour bleed and caustics. 
                    A photon mapping method was added to the ray tracer, which creates softer shadows and better caustics.</p>

                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href='https://github.com/trainlock/MonteCarloRayTracer'>
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">In Monte Carlo ray tracing, integrals are solved using the Monte Carlo integration 
                    and random sampling. The rendering equation presented by Kajiya et al, in The Rendering Equation, is the 
                    foundation of the Monte Carlo ray tracing implementation and describes how to calculate the light intensity 
                    at any point on a surface within a scene.</p>

                <p className="project-text">When rendering a scene in 3D, an image is created where the screen pixels are filled
                    with colour intensity values computed with rays. These values correspond to those given when looking at the scene, 
                    from the camera, through a pixel plane. The camera has a given position, where it is located, as well as a point 
                    to look at. The normalised difference between these two points gives the viewing direction of the camera. 
                    The main purpose of the camera is to set the origin of the traced rays, which all go through the view plane, 
                    representing the screen pixels. </p>

                <p className="project-text">To view the scene, it must contain one or more light sources as well as objects, 
                    or surfaces, that the light rays can intersect with. These objects can be implicit objects or shapes described 
                    as polygonal meshes. Each object has a position in the scene, relative to the world coordinate system, and a 
                    given specific material property.</p>

                <p className="project-text">The rendered scene used in this project contained a box-shaped room, more specifically 
                    a Cornell box. The room contained various objects such as implicit spheres and polygon meshes. This ray tracer uses 
                    three different types of rays; shadow rays, reflected rays and refracted rays.</p>

                <img className="project-img"
                     src={ mix }
                     alt="projImg"
                />
                <p className="project-text"><i>Models of varying complexity rendered with a Monte Carlo ray tracer using 128 rays.</i></p>

                <img className="project-img"
                     src={ dragon }
                     alt="projImg"
                />
                <p className="project-text"><i>A models of a dragon rendered with a Monte Carlo ray tracer using 128 rays to the left and rendered with
                    a photon map consiting of 20000 photons. </i></p>
                {/*
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
                */}
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

export default Project;