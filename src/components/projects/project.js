import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
//import { Player } from 'video-react';

import testImg from './../../images/test.jpg';

class Project extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundImage: 'url(' + testImg + ')'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Project Name</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sit amet ex laoreet, commodo nisi rhoncus, dignissim ex. Suspendisse at odio vel
                  nibh sodales lobortis. Suspendisse vitae lobortis magna, id viverra nunc. Suspendisse potenti.
                  Sed luctus enim at risus auctor pulvinar. In id est diam. Morbi molestie vel lectus sed pellentesque.
                  Sed lacinia magna sem, sed cursus leo fringilla ut. Proin tincidunt rhoncus massa. Aenean quis
                  felis euismod, aliquam sem at, feugiat augue. Quisque turpis felis, suscipit quis ipsum vitae,
                  consequat ultricies massa.</p>
  
                <img className="project-img"
                     src={ testImg }
                     alt="projImg"
                />
                
                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href='https://github.com/trainlock'>
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sit amet ex laoreet, commodo nisi rhoncus, dignissim ex. Suspendisse at odio vel
                  nibh sodales lobortis. Suspendisse vitae lobortis magna, id viverra nunc. Suspendisse potenti.
                  Sed luctus enim at risus auctor pulvinar. In id est diam. Morbi molestie vel lectus sed pellentesque.
                  Sed lacinia magna sem, sed cursus leo fringilla ut. Proin tincidunt rhoncus massa. Aenean quis
                  felis euismod, aliquam sem at, feugiat augue. Quisque turpis felis, suscipit quis ipsum vitae,
                  consequat ultricies massa.</p>
  
                <img className="project-img"
                     src={ testImg }
                     alt="projImg"
                />
  
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