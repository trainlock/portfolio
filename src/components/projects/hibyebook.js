import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import logo from './../../images/project-img/tnm069/tnm069-logo.png';
import style from './../../images/project-img/tnm069/tnm069-style.png';
import web from './../../images/project-img/tnm069/tnm069-web.png';

class HiByeBook extends Component {
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
                <h2 className="project-title">HiByeBook</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i> of each term, thousands of students buy new book for their new
                  classes. Many buys old used book but finding sellers and buyers of new books can be a hassle.
                  Hi Bye Book aims to ease 2nd hand market of course literature and thereby encourage more
                  students to buy books 2nd. This project was a part of the course Graphics Design and
                  Communication (TNM069) at Linköping University. </i></p>
  
                <p className="project-text">A team of 5 people worked on this project.
                  My responsibilities were concept design, designing the logo and
                  webpage and making the graphic profile manual. Apart from the concept design everything
                  was created in Adobe Illustrator and InDesign. </p>
  
                <img className="project-img"
                     src={ logo }
                     alt="projImg"
                />
                
                <p className="project-text">Hi Bye Book is a site that helps students sell and buy used course
                  literature. The literature can be filtered based on which University, courses or subject areas.
                  The target group are Swedish speaking students in the age 19-30 years old that studies at
                  different Universities all across Sweden. </p>
  
                <p className="project-text">In the beginning of the project several prototype designs over
                  the logo, colours and font were created and a survey to find the most fitting logo was
                  conducted. The participants from different programs and schools since it was important
                  to get the opinion of a wide range of students. </p>
  
                <p className="project-text">Based on the survey the colours, logo and font was decided and
                  the design developed. The colours in the logo represents diversity, knowledge and being
                  environment friendly. For Hi Bye Book a flyer, rollup and the layout for a webpage was
                  designed as well as business card and a graphic profile manual.  </p>
  
                <img className="project-img"
                     src={ style }
                     alt="projImg"
                />
                
                <img className="project-img"
                     src={ web }
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

export default HiByeBook;