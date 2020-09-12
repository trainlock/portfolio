import React, { Component } from 'react';
import {Col, Row, Container, Button} from "reactstrap";
import {Link} from "react-router-dom";

class Project extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head">
            <Row>
              <Col col={12}>
                <h2 className="project-title">Project Name</h2>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <p>Insert project-related image</p>
                <img className="portfolio-img"
                     src="https://png.pngtree.com/svg/20170719/1217a8a69e.png"
                     alt="projImg"
                     style={{ height: '250px' }}
                />
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
  
                <div className="project-button">
									<span className="button">
										<Link className="btn-a btn-about" to="/about">Code</Link>
									</span>
                </div>
                
                <img className="portfolio-img"
                     src="https://png.pngtree.com/svg/20170719/1217a8a69e.png"
                     alt="projImg"
                     style={{ height: '250px' }}
                />
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
                
                <div className="project-button">
									<span className="button">
										<Link className="btn-a btn-about" to="/about">Return to Projects</Link>
									</span>
                </div>
                
                <img className="portfolio-img"
                     src="https://png.pngtree.com/svg/20170719/1217a8a69e.png"
                     alt="projImg"
                     style={{ height: '250px' }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default Project;