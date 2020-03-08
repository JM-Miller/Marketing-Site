import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../img/RHLogo.gif';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './HeaderBar.css'

class HeaderBar extends Component {

  constructor() {
    super();
    let locationParts = window.location.href.split('/');
    if (locationParts.length <= 4 && locationParts[3] == "") {
      setTimeout(() => {
        window.scrollTo({ top: this.titleRef.getBoundingClientRect().y, behavior: "smooth" })
      }, 200);
    }
  }

  render() {
    return (
      <div className="header-bar">
        <Navbar className="header-bar nav">
          <Link to="/about" className="header-link col-md-3 col-sm-12" >
            <span>About Me</span>
          </Link>
          <Link to="/skills" className="header-link col-md-3 col-sm-12">
            <span>My Skillset</span>
          </Link>
          <Link to="/projects" className="header-link col-md-3 col-sm-12" >
            <span>My Projects</span>
          </Link>
          <Link to="/contact" className="header-link col-md-3 col-sm-12" >
            <span>Contact Me</span>
          </Link>
          {/* <Link to="/give" className="header-link col-md-2 col-sm-12" >
            <span>How I Give Back</span>
          </Link>
          <Link to="/contact" className="header-link col-md-2 col-sm-12" >
            <span>Contact Me</span>
          </Link> */}
        </Navbar>
        <Col md={12}>
          <br/>
          <h3 id="page-title" ref={titleRef => this.titleRef = titleRef}>
            {this.props.title}
          </h3>
          <br/>
          {/* <span href="https://www.roberthalf.com/work-with-us/our-services/long-term-project-consultants"><img style={{ width: "100px" }} src={Logo} /></span> */}
        </Col>
      </div>
    );
  }
}

export default HeaderBar;