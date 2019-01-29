import React, { Component } from "react";
import { Col, Panel } from 'react-bootstrap';
import HeaderBar from './../master/HeaderBar';
import './IconAnimation.css';
import './TextAnimation.css';
import './HomePage.css';
import Book from './../img/BookIcon.svg';
import Gear from './../img/GearIcon.svg';
import Shovel from './../img/ShovelIcon.svg';
import Runner from './../img/RunnerIcon.svg';
import Airplane from './../img/AirplaneIcon.svg';
import HoodieSelfie from './../img/HoodieSelfieNoLogo.jpg'

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
                <Panel className="page-contents-panel" style={{ float: "left", width: "66%", margin: "0 16%" }}>
                    <hr />
                    <h4>Jonathan M Miller</h4>
                    <h5> Salaried Professional Consultant </h5>
                    <br />
                    <div className="text-section">
                        <div className="image-container col-lg-6" style={{ float: "left" }}>
                            <span className="image-label" >Working late, 5AM @ CES 2019</span>
                            <img className="" src={HoodieSelfie}></img>
                        </div>
                        <div className="description-verb-list col-lg-6 col-sm-12" style={{ float: "left", textAlign: "left" }}>
                            <hr />
                            <span style={{ position: "absolute", width: "100%" }}>I'm Jon</span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="write-software">
                                <span style={{ textAlign: "left", width: "100%" }}>I write software</span>
                                &nbsp;&nbsp;
                            <span className="UnderscoreIcon">&nbsp;</span>
                            </span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="build-things">
                                <span>I build hardware</span>
                                &nbsp;&nbsp;
                                <img className="GearIcon" src={Gear} />
                                <img className="LittleGearIcon" src={Gear} />
                            </span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="volunteer">
                                <span>I give back</span>
                                &nbsp;&nbsp;
                            <img className="ShovelIcon" src={Shovel} />
                                <span>
                                </span>
                            </span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="run-trails">
                                <span>I run races</span>
                                &nbsp;&nbsp;
                            <span>
                                    <img className="RunnerIcon" src={Runner} />
                                </span>
                            </span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="go-places">
                                <span>I go places</span>
                                &nbsp;&nbsp;
                            <span>
                                    <img className="AirplaneIcon" src={Airplane} />
                                </span>
                            </span>
                            <br />
                            <br />
                            <span style={{ position: "absolute", width: "100%" }} className="tell-stories">
                                <span>I tell stories</span>
                                &nbsp;&nbsp;
                            <span>
                                    <img className="BookIcon" src={Book} />
                                </span>
                                <br />
                            </span>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <hr />
                        </div>
                        <div className="text-blurb " style={{ padding: "2%", float: "left" }} >
                            <br />
                            <p style={{ paddingLeft: "0%" }}>
                                <h5>Well, hello there!</h5>
                                If you're reading this, then there's a pretty good chance that either you know me and my work, or you might want to work with me in the future. Or maybe you're just an intrepid internet scuba diver at the end of a long trail of purple hyperlinks.
                            </p>
                            <p style={{ margin: "0%" }}>
                            </p>
                            <p style={{ margin: "0%" }}>
                                In any case, I'm glad you're here. I hope you'll stay a while and take a look at the work I've done, the places I've been, and the stories I've told.
                        </p>
                            <div className="hyperlink">
                                <h6>- Contact Me -</h6>
                                <hr className="stylized-underline" />
                                <br/>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        )
    }

}

export default HomePage;