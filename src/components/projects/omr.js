import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import omr from '../../images/project-img/omr.png';

class Omr extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundImage: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Optical Music Recognition</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>Optical Music Recognition is closely related to optical character
                  recognition, but instead of characters, it categorises notes on a note sheet. This project
                  was a part of the course Advanced Image Processing (TNM034) at Linköping University.</i></p>
  
                <p className="project-text">An algorithm for solving a simplified Optical Music Recognition (OMR)
                  problem was implemented in MATLAB. The aim was to classify specific notes on scanned images of
                  music scores with OMR. The project team consisted of three students, including myself. </p>
                
                <img className="project-img"
                     src={ omr }
                     alt="projImg"
                />
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">Pre-processing followed by segmentation and classification was
                  used to solve the OMR problem. During the pre-processing geometric correction was used to
                  straighten the distorted note lines.</p>
  
                <p className="project-text">To calculate the pitch estimation of the note lines positions was
                  done using horizontal projection. The notes were classified using several morphological operations,
                  such as dilate and erode, and pinpointing horizontal and vertical bars. </p>
  
                <p className="project-text">By grouping the note heads and the horizontal and vertical bars
                  if they intersected the note could be sorted and classified. The classified notes were then
                  written out as accords. </p>
  
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

export default Omr;