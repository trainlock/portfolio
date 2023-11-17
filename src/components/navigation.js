import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header-content">
        <Navbar color="light" light expand="md" id="header-layout">
          <NavbarBrand href="/">Linnea Bergman</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto navbar" navbar>
            <NavItem>
              <NavLink className="nav-text" tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-text" tag={Link} to="/about">About Me</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

