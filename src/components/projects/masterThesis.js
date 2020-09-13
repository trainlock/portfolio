import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

import neutral from './../../images/project-img/master-thesis/face-neutral-wire.png';
import tension from './../../images/project-img/master-thesis/face-tension.png';
import bary from './../../images/project-img/master-thesis/bary-triangle.png';
import dispMap from './../../images/project-img/master-thesis/disp-map.png';
import quadtree from './../../images/project-img/master-thesis/quadtreeEx.png';
import survey from './../../images/project-img/master-thesis/survey.png';
import gif from './../../images/project-img/master-thesis/render-gif-2211.gif';
import half from './../../images/project-img/master-thesis/face-half.png';
import frown from './../../images/project-img/master-thesis/render-dynamic-1121.png';
import fullFace from './../../images/project-img/master-thesis/render-full-face.png';

class MasterThesis extends Component {
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
                <h2 className="project-title">Master Thesis - Dynamic Microstructure Deformations</h2>
              </Col>
            </Row>
          </div>
          <div className="project-content">
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Summary</h3>
                <p className="project-text"><i>This thesis describes the implementation of a technique for
                  synthesising the effects of microscale skin deformations. This was done by anisotropically
                  convolving a high-resolution displacement map to match the subtle changes in the skin's
                  facial expression. By blurring and sharpening a static microstructure displacement map,
                  based on the information retrieved from a generated tension map, the effect of stretch
                  and compression could be mimicked and saved as an image sequence of dynamic microstructure
                  displacement map in .exr-format. For the possibility of real-time execution, the application
                  was sped-up using the GPU and parallelisation. OpenCL was added in the implementation since
                  the API has both GPU and CPU support and is platform-independent. This enables artists to
                  view the result on their workstations with the GPU and to run on a CPU only rendering farm.
                  The performance was further improved with the implementation of a quadtree data structure
                  and OpenMP. From conducted surveys, it was concluded that an image rendered with a dynamic
                  microstructure displacement map was perceived as more realistic-looking than one with a
                  static microstructure displacement map. </i></p>
  
                <p className="project-text">This project was my master thesis project for Media Technology
                  at Linköping University. It was done solely by me to improve skin in realistic digital
                  humans, focusing on the microscopic wrinkles and pores. These wrinkles affect how light
                  is reflected on the skin, therefore affecting how the skin is perceived. The project was
                  in collaboration with the company Goodbye Kansas Studios in Stockholm and was based on
                  the paper by Nagano et. al, “Skin Microstructure Deformation with Displacement Map
                  Convolution”. It was written in C++ with the assistance of OpenCL to access the GPU
                  for faster computations. At Goodbye Kansas Studios I worked with the Pipeline Team,
                  and my stay there was a terrific experience. </p>
  
                <Player
                  playsInline
                  poster="/logos/master-thesis.png"
                  src="videos/master-thesis-video.mp4"
                />
                
                {/*
                <div className="project-button">
                  <a href='https://github.com/trainlock'>
                    <button className="square-btn">Code</button>
                  </a>
                </div>
                */}
              </Col>
            </Row>
            
            <Row>
              <Col col={12}>
                <h3 className="project-subtitle">Technical Walkthrough</h3>
                <p className="project-text">A model of a realistic digital human was used to experiment on,
                  but the resulting application is applicable for any model which have wrinkles. The wrinkles
                  can be seen as the skin stretching or compressing, where they are orthogonal to each other. </p>
                
                <img className="project-img"
                     src={ neutral }
                     alt="projImg"
                />
                <p className="project-text"><i>The model used in a neutral position with wireframes visible. </i></p>
  
                <p className="project-text">To begin with, a tension map was generated to acquire knowledge
                  of where the skin deformations occur. A tension map contains the stretch and compression
                  information of any given object. To generate a tension map, the neutral position, or the
                  rest state, was compared with the deformed position. First, the rest and deformed positions
                  were transformed from 3D to 2D space (tangent space), then, using singular value decomposition
                  (abbreviated svd), information about the stretch, compression and direction of stretch was
                  retrieved and the stress ratio saved in the vertex colours. </p>
                
                <img className="project-img"
                     src={ tension }
                     alt="projImg"
                />
                <p className="project-text"><i>The rightmost image is in wireframe mode, the middle with the tension
                  map visible as the vertex colours and the left most the actual tension map. </i></p>
  
                <p className="project-text">To convert from vertex colour into per pixel colour barycentric
                  coordinates were used. Barycentric coordinates are used to interpolate over the colour
                  attribute associated with the vertices. With these, it was possible to determine which
                  vertices that a pixel was adjacent to and how much the other vertices on a face affected
                  the pixel. </p>
  
                <img className="project-img"
                     src={ bary }
                     alt="projImg"
                />
                <p className="project-text"><i>Interpolation of colours for a chosen point in a triangle
                  using barycentric coordinates. </i></p>
  
                <p className="project-text">The next step was then to apply the computed stress ratio to a
                  static microstructure displacement map, which was inputted as a simple texture to the
                  application. Applying the stress ratio on the texture could be achieved with the help
                  of the math explained in the paper by Nagano et. al. Simplified, the stress ratio was
                  fitted against given parameters that specify the skin stretch and compression range.
                  Then a Gaussian kernel function blurs or sharpens depending on if it the skin is stretched
                  or compressed. This is then applied to each pixel in the texture, where each pixel is
                  affected by the surrounding pixels and repeated until all pixels have been computed.
                  These pixels then compose the dynamic microstructure displacement map. </p>
  
                <img className="project-img"
                     src={ dispMap }
                     alt="projImg"
                />
                <p className="project-text"><i>The left image is the static displacement map and the right
                  image is a dynamic displacement map of a surprised expression. </i></p>
                
                <p className="project-text">To speed up computation time a quadtree was added to the structure.
                  With quadtrees, space can be partitioned into non-overlapping regions where any point in space
                  can be identified within one of the regions or its subregions. Quadtrees are a data structure
                  where each internal node has exactly four children, one for each quadrant. The face triangles
                  were saved in the quadtree and used to map the pixel. </p>
  
                <img className="project-img"
                     src={ quadtree }
                     alt="projImg"
                />
                <p className="project-text"><i>A simple quadtree where each subregion (boxes) and its content
                  (coloured cubes) can be seen. </i></p>
                
                <p className="project-text">A small survey was held at the end of the project to determine if it
                  was a noticeable difference between the static and dynamic displacement map. In the survey,
                  the testers viewed an image where the same model could be seen with either a static or dynamic
                  displacement map. They then got to vote which they perceived as more realistic or if they were
                  the same. In the online survey, 113 participated with various experience with SFX were 83.2%
                  deemed that the image with a dynamic displacement map was more realistic. </p>
                
                <img className="project-img"
                     src={ survey }
                     alt="projImg"
                />
                <p className="project-text"><i>Result of the survery of which image, static or dynamic, was
                  more realistic. </i></p>
                
                <img className="project-img"
                        src={ gif }
                        alt="projImg"
                />
                <p className="project-text"><i>Image Nr. 1 is rendered with a static displacement map and
                  image Nr. 2 with a dynamic one. </i></p>
  
                <img className="project-img"
                     src={ half }
                     alt="projImg"
                />
                <p className="project-text"><i>In both images, the left half is with a static displacement
                  map and the right a dynamic one. </i></p>
  
                <p className="project-text">Following images are the resulting images in a rendered
                  format with a dynamic displacement map. </p>
                
                <img className="project-img"
                     src={ frown }
                     alt="projImg"
                />
                <p className="project-text"><i>A fully rendered face with a dynamic displacement activated. </i></p>
  
                <img className="project-img"
                     src={ fullFace }
                     alt="projImg"
                />
                <p className="project-text"><i>These images show the dynamic displacement map rendered with skin and
                  with only specular light activated. </i></p>
                
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

export default MasterThesis;