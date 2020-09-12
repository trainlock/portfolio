import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import game from './../../images/project-img/legionen-the-game/legionenTheGamePlaying.png';

class Project extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundImage: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Legionen - The Game</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>This game was a project made by part of the welcoming committee
                  for the new students at MSc Media Technology. It’s a 2D pixel art game where the player
                  plays as one of the people in the welcoming committee for Media Technology. The aim is
                  to collect as many pineapples and new students as possible within the time limit and
                  avoiding hazardous objects. </i></p>
  
                <p className="project-text">We were four students that worked with this side-project.
                  My responsibilities, along with one more, was to develop the
                  back-end of the game. Unity was used to produce the game.
                </p>
                
                <Player className="project-video"
                        playsInline
                        poster="/logos/LegionenTheGame.png"
                        src="videos/LegionenTheGame.mp4"
                />
                {/*
                <div className="project-button">
                  <a href="https://github.com/trainlock/LegionenTheGame">
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
                <div className="project-button">
                  <a href="https://github.com/trainlock/LegionenTheGame">
                    <button className="button type1">Code</button>
                  </a>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">When the game starts, the player can play as one of ten possible avatars,
                  randomly chosen. Then the player has 120 seconds to roam the area in search of pineapples and
                  students. In the vicinity, dangerous objects and creatures roam which the player has to
                  avoid or destroy.
                </p>
                <p className="project-text">
                  The collectables, pineapple and students, give different amount of points. Students are harder
                  to find and reach but award more points.
                </p>
                <p className="project-text">
                  There are two types of enemies, slimes and acorns. Slimes move from side to side in a given area,
                  whereas acorns are located in the tree branches. When the player moves within range, the acorn
                  will plummet to the ground. The range depends on how far up the acorn is placed. Objects and
                  creatures are destroyed by jumping on them. However, if they touch the player, it is game over.
                </p>
                
                <img className="project-img"
                     src={ game }
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

export default Project;