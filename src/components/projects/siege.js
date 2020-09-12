import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import models from './../../images/project-img/siege/tnm094-models.jpg';
import game from './../../images/project-img/siege/tnm094-game.png';
import cards from './../../images/project-img/siege/tnm094-siegeCard.png';
import card from './../../images/project-img/siege/tnm094-card.png';
import menu from './../../images/project-img/siege/tnm094-menuStartQuit.png';

class Siege extends Component {
  render() {
    let videoPath = './../../videos/tygladig.mp4';
    
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center"
               style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
            <Row>
              <Col col={12}>
                <h2 className="project-title">Siege Siege Siege</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>Siege Siege Siege is a tower defence game with a twist.
                  In the 3D VR game the player can spawn it’s minions which will attack the opponent restlessly.
                  But to spawn a minion the player have to place real physical card on the virtual ground where
                  the minion is to be spawned. Though a simple rock-scissor-paper mechanics is used for the
                  minions the physical interaction and the 3D possibilities creates an engaging game.</i></p>
                
                <p className="project-text">
                  This project was my bachelor project in Media Technology (TNM094) at Linköping University.
                  The goal of the bachelor project was to develop a virtual reality game with physical game
                  cards as controllers. The aim was to shorten the distance between the player and the game
                  by having real objects interact with the virtual world.
                </p>
                
                <p className="project-text">The team consisted of seven students, using an agile framework during
                  development and GitHub for synchronisation. My responsibilities was concept art, animating the
                  henchmen, model and setup the environment as well as implementing game mechanics. Modelling and
                  animation was done in Maya and the game was put together in Unity.
                </p>
                
                <img className="project-img"
                     src={ models }
                     alt="projImg"
                />
          
                {/*
                <Player className="project-video"
                  playsInline
                  poster="/assets/poster.png"
                  src="https://www.youtube.com/embed/137857207"
                />
                */}
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">In the game, the player’s goal was to eliminate the opponent’s
                  home base by placing the physical game cards on a digital battlefield and summon minions
                  to attack the opponent. The player only have to keep track on three physical cards which
                  are dynamically updated in the game to randomise what type of minion the player can summon.
                  Three different type of minions exists in the game and the battle system follows the
                  rock-scissors-paper mechanics. Each minion have a favoured enemy which they are strong
                  against and the arch nemesis which they are weak against. </p>
  
                <img className="project-img"
                     src={ game }
                     alt="projImg"
                />
  
                <img className="project-img"
                     src={ card }
                     alt="projImg"
                />
                
                <p className="project-text">Unity was used as a game engine to develop the game,
                  Vuforia for tracking the game cards and HTC Vives VR-glasses to visualise the game.
                  Everything was written in C# with Unitys build in engine and functionalities. During
                  development the agile framework Scrum to structure the work and each sprint was two weeks long.
                  Each sprint the role of the scrum leader was passed amongst the project members interchangeably.
                  With each sprint the task was divided amongst the project members and shifted to make sure that
                  all members knew everything about the project and to allow continuous code reviews.
                </p>
  
                <img className="project-img"
                     src={ menu }
                     alt="projImg"
                />
                
                <img className="project-img"
                     src={ cards }
                     alt="projImg"
                />
                
                <p className="project-text">The result was the actual game where the primary focus was on the
                  UI and UX for the game cards. Physical cards were limited to three since more cards was hard
                  for the player to hold and was hard to track. Only low-polygon models was used in the game
                  to lower the system requirements and thereby increase the frame rate. A high frame rate is
                  needed for VR games to not cause nausea.
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

export default Siege;