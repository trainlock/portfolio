import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import lab1 from './../../images/project-img/tnm079/tnm079-lab1.png';
import cow from './../../images/project-img/tnm079/tnm079-lab2-cow.png';
import curve from './../../images/project-img/tnm079/tnm079-lab3-curve.png';
import surface1 from './../../images/project-img/tnm079/tnm079-lab4-1.png';
import surface2 from './../../images/project-img/tnm079/tnm079-lab4-2.png';
import surface3 from './../../images/project-img/tnm079/tnm079-lab4-3.png';
import surface4 from './../../images/project-img/tnm079/tnm079-lab4-4.png';
import teapot from './../../images/project-img/tnm079/tnm079-lab5-teapot.png';
import level from './../../images/project-img/tnm079/tnm079-lab5-level.png';
import fluid from './../../images/project-img/tnm079/tnm079-lab6.png';

class Moa extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Modelling and Animation</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>A series of lab sessions focusing on 3D surfaces for the course
                  Modelling and Animation (TNM079) at Linköping University. The course bestowed knowledge of
                  current and advanced methods in computer graphics for modelling and animation of virtual
                  objects and 3D surfaces.</i></p>
                
                <p className="project-text">These labs were done in pairs where C++ was used for implementation. </p>
    
                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock/TNM079-Labs'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href='https://github.com/trainlock/TNM079-Labs'>
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                {/* TODO: Add section text here */}
                <p className="project-text">The following sections describes the labs in more detail.
                </p>
  
  
                <h4 className="project-subtitle">Lab 1 - Mesh Data Structures</h4>
                <p className="project-text">This lab focused on implementing algorithms to represent meshes with
                  triangles. Triangles are the most common format to represent polygon modules. In the lab a
                  half-edge mesh was implemented which had neighbour access and normals, volume and surface
                  area of a mesh was calculated. A half-edge mesh is a common way of representing a mesh and
                  is a quicker method than just drawing each triangle by itself. By implementing a half-edge
                  mesh knowledge of the structure was gained.  </p>
  
                <img className="project-img"
                     src={ lab1 }
                     alt="projImg"
                />
  
                <h4 className="project-subtitle">Lab 2 - Mesh Reduction</h4>
                <p className="project-text">In order to save time and effort algorithms can be used to create
                  lower resolution models of highly detailed models. These algorithms does this automatically
                  and one such method is the quadric based mesh decimation. The decimation algorithm is based
                  on quadric error metrics. In this lab edge contradiction was used to decimate the models.  </p>
                
                <img className="project-img"
                     src={ cow }
                     alt="projImg"
                />
  
                <h4 className="project-subtitle">Lab 3 - Splines and Subdivision</h4>
                <p className="project-text">In computer graphics one important feature is to be able to make
                  surfaces and curves smooth. By subdividing the curves and surfaces with an approximation they
                  can become smoother and get more vertices. The scheme that was used for the subdivision, to
                  create smooth curves ans surfaces, was the Loop subdivision scheme.
                </p>
                
                <p className="project-text">Subdivision curves and surfaces are fast to compute and are widely
                  used in the area of applied computer graphics. The splines used in the lab were uniform cubic
                  B-spline curves. Parametric representations were also used and the curves are rewritten to a
                  stable basis. The curve subdivision and the mesh subdivision was implemented. An evaluation
                  of the spline was also done.
                </p>
  
                <img className="project-img"
                     src={ curve }
                     alt="projImg"
                />
  
                <h4 className="project-subtitle">Lab 4 - Implicit Surfaces and Bézier Curves</h4>
                <p className="project-text">This part of the lab session was about implicit surfaces and level sets.
                  The purpose of the lab was to get a better understanding of how to work with implicit functions
                  and different representations, such as the general quadric function formulation.
                </p>
  
                <p className="project-text">Methods for generating implicit quadric surfaces, such as ellipsoids,
                  cones and planes, were implemented. Three boolean operations, union, intersection and difference,
                  were also implemented.
                </p>
                
                <img className="project-img"
                     src={ surface1 }
                     alt="projImg"
                />
  
                <img className="project-img"
                     src={ surface2 }
                     alt="projImg"
                />
                
                <p className="project-text">For the level set implementation, operations such as erosion and
                  dilation were implemented by using an upwind Godunov scheme. Parabolic diffusion and hyperbolic
                  advection were implemented and calculated with a central difference scheme for the diffusion
                  and an upwind scheme for the advection.
                </p>
  
                <img className="project-img"
                     src={ surface3 }
                     alt="projImg"
                />
                
                <img className="project-img"
                     src={ surface4 }
                     alt="projImg"
                />
  
                <h4 className="project-subtitle">Lab 5 - Level Set Framework</h4>
                <p className="project-text">This lab uses temporal and spatial discretisation of the necessary
                  equation of motion. The first determines how the surface is evolved in time using discrete
                  time steps, while the latter determines how the discrete differentials (e.g. gradients, curvature)
                  are computed in space.
                </p>
  
                <img className="project-img"
                     src={ level }
                     alt="projImg"
                />
                
                <p className="project-text">Two different classes of Partial Differential Equations (abbreviated
                  PDEs), hyperbolic and parabolic, give use to spatial discretisation strategies, "upwinding" and
                  "central differencing", which are used.
                </p>
                
                <p className="project-text">The level set function is kept as close as possible to the signed
                  distance function, which describes the closest distance to the surface for each point. The
                  sign of the distance determines whether it is outside or inside the surface.
  
                  In the lab PDEs for performing operations such as dilation, erosion,
                  advection and smoothing the surface were constructed.
                </p>
                
                <img className="project-img"
                     src={ teapot }
                     alt="projImg"
                />
  
                <h4 className="project-subtitle">Lab 6 - Eulerian Fluid Simulation</h4>
                <p className="project-text">This lab focused on simulating water, which is a free surface fluid.
                  Using the Stable Fluids approach of the Navier-Stokes equations the simulation was computed.
                  The Navier-Stokes equations describe how a fluid changes over time, were the flow is described
                  by a vector field. The fluid solver was extended with self advection using semi-Lagrangian
                  integration.
                </p>
  
                <img className="project-img"
                     src={ fluid }
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

export default Moa;