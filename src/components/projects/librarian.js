import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import astar from './../../images/project-img/tsbk35/tsbk35-astar.png';
import game from './../../images/project-img/tsbk35/tsbk35-game.png';
import path from './../../images/project-img/tsbk35/tsbk35-path.png';

class Librarian extends Component {
  render() {
    return (
      <div className="project-body vertical-center">
        <Container className="project-grid">
          <div className="project-head vertical-center" style={{backgroundColor: 'rgba(1, 2, 25, 1.0)'}}>
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
                <p className="project-text"><i>In the middle of the night a lone player walks in the deserted
                  corridors of the grand library in search for books. No one is allowed to be in the library
                  after dark apart from the librarian patrolling the corridors. The calling for the player is
                  to collect all books without getting caught by the librarian. </i></p>
                
                <p className="project-text">This project was done individually.
                  The Librarian was created as a part of the course Advanced Game
                  Programming (TSBK03) at Linköping University. The goal was to implement an A* pathfinding
                  AI that searches for the player. </p>
                
                <p className="project-text">Spread out through the library is several books that the player
                  seeks. If the player manages to find all books without being discovered by the librarian
                  patrolling the area, they win. However, if they are discovered they loose. </p>
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
                <p className="project-text">The librarian is a game-AI that have several different components
                  to control how it acts. It’s main abilities is to search the field, find a place to go to,
                  go there and then continue searching. It can only see within its field of view and will
                  react if a player enters its field of view by walking to the last place the player was spotted.
                  The four main components of the game-AI is an influence map, A* pathfinding, a field of view
                  and a simple state machine. </p>
  
                <p className="project-text">The influence map is a 2D-grid map that was used to base where the
                  AI should go and what it could see. The values in the influence map varied between 0 and 1.
                  0 represented unexplored areas or areas that the AI haven’t been to in a while. Unexplored
                  areas were high priority areas which the game-AI wants to explore. 1 represents areas which
                  the game-AI can see. All values in between 0 and 1 are areas that which the game-AI recently
                  viewed or visited. When the game-AI picks a position to go to, it takes a random point on the
                  influence map with the value 0 that the game-AI can walk to. A low-pass filter and ping-pong
                  are used to diffuse and blur the areas which the game-AI can see. </p>
                
                <p className="project-text">For the pathfinding I chose to write my own script instead of using
                  Unitys own. When a position have been set a shortest-path is saved in nodes and is calculated
                  based on a weight each position have. The weight on the positions are based on three components,
                  f-, h- and g-value.  By using a heap the pathfinding algorithm could be sped up. The heap sorts
                  the nodes based on a pre-determined priority using a sort down algorithm. </p>
  
                <img className="project-img"
                     src={ astar }
                     alt="projImg"
                />
                
                <p className="project-text">The AI starts with the first node in a list with the nodes containing
                  the shortest path and continues until the list is empty. Then the AI will have reached its goal.
                  When the goal has been reached the AI looks around in the vicinity and then goes to a new
                  position. </p>
                
                <img className="project-img"
                     src={ path }
                     alt="projImg"
                />
  
                <p className="project-text">What the AI can see is limited with a field of view, which depends
                  on a radius and angle. The AI can only see that which is inside of the field of view and it
                  cannot see through walls. </p>
  
                <p className="project-text">If the player is spotted then the AI will change behaviour using
                  a state machine. The AI has four states: Searching, Patrolling, Hunting and Local Patrolling.
                  Searching means that the AI looks around itself, Patrolling is when the AI uses the influence
                  map and pathfinding to find and go to a point. These two loops over and over. The remaining
                  two gets activated when the player is spotted. Hunting means that the AI will take the shortest
                  path to the player and Local Patrolling is when the AI use pathfinding with distortion to
                  walk to where the player was last spotted. If the player is not found before the trace is
                  lost then the AI will enter state Searching. </p>
  
                <img className="project-img"
                     src={ game }
                     alt="projImg"
                />
                
                <p className="project-text">For future work proper models and environment could be added as
                  well as lightning and sound effects. But more importantly more and improved gameplay as
                  well as more clever game-AI is definitely a priority. </p>
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

export default Librarian;