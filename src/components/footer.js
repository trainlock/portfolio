import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { FaBeer, FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
      <div className="footer">
        <Container className="footer-body">
          <div className="footer-content vertical-center">
            <div>
              <h4 className="footer-text">Linnea Bergman</h4>
              <a href="mailto:trainlock@gmail.com"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/bergman-linnea/"><FaLinkedin /></a>
              <a href="https://github.com/trainlock"><FaGithubSquare /></a>
            </div>
          </div>
        </Container>
      </div>
		)
	}
}

export default Footer;