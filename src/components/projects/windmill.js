import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import hs1 from './../../images/project-img/tnm088/haystack-1.png';
import hs2 from './../../images/project-img/tnm088/haystack-2.png';
import lamp from './../../images/project-img/tnm088/lamp.png';
import mill from './../../images/project-img/tnm088/mill.png';
import stair from './../../images/project-img/tnm088/stair.png';

class Windmill extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundImage: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Windmill</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>In the middle of a forest lies an old abandoned windmill.
                  Layers of dust on the inside indicate years of unused yet, with a creaking noise,
                  the mill slowly rotates with the wind.
                </i></p>
  
                <p className="project-text">This project was a part of the course Digital Media (TNM088) at
                  Linköping University. The group consisted of six members where we partitioned the tasks
                  evenly between the members.
                </p>
                
                <img className="project-img"
                     src={ stair }
                     alt="projImg"
                />
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">"Windmill" is a 3D environment where the user can walk around
                  in an old realistic windmill. It was created as a part of the course Digital Media (TNM088)
                  at Linköping University, to deepen our knowledge in 3D environments. All models were created
                  in the modelling program 3Ds Max and the environment was constructed in Unreal Engine 4 (UE4).</p>
  
                <img className="project-img"
                     src={ mill }
                     alt="projImg"
                />
  
                <p className="project-text">My responsibilities, in the project, were concept art and design,
                  sound effects and modelling small furniture. For the sound effects, free sound effects were
                  used and added in UE4 using blueprints. The 3D models were created in 3Ds Max and the
                  textures made in Photoshop.</p>
  
                <p className="project-text">The interior of the windmill consisted of the windmill mechanics,
                  lanterns, sacks of flour, hay bales, wooden barrels amongst others. To add more realism
                  ight and particle effects to simulate dust was added using UE4 blueprints. </p>
                
                <img className="project-img"
                     src={ lamp }
                     alt="projImg"
                />
  
                <img className="project-img"
                     src={ hs1 }
                     alt="projImg"
                />
  
                <img className="project-img"
                     src={ hs2 }
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

export default Windmill;