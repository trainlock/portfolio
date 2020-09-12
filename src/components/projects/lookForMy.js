import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import home from './../../images/project-img/look-for-my/LookForMyHomeHover.png';
import company from './../../images/project-img/look-for-my/LookForMyCompany.png';

class LookForMy extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">LookForMy</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text">
                  LookForMy is a web-platform for lost and founds.
                  Companies can post on the webpage found possessions and the owners can more
                  easily find what they are missing. LookForMy help owners find their lost possessions.
                </p>
                <p className="project-text">
                  I designed the layout of the webpage, following their graphic profile.
                </p>
  
                <img className="project-img"
                     src={ home }
                     alt="homePage" />
                     
                <p className="project-text">
                  This is the homepage of the website for LookForMy. The users can immediately go to the company, place
                  or event where they lost their possession. When hovering over a company it is highlighted to
                  hint that they can look for more details there.
                </p>
                
                <img className="project-img"
                     src={ company }
                     alt="companyPage" />
                     
                <p className="project-text">
                  When a company has been selected the users can read more about the company, place or event as well
                  as sort amongst their lost-and-found. Hopefully they will find what they are looking for.
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

export default LookForMy;