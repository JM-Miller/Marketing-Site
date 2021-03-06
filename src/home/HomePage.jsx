import React from "react";
import HeaderBar from './../shared/HeaderBar/HeaderBar';
import './IconAnimation.css';
import './TextAnimation.css';
import './HomePage.css';
import Gear from './../img/GearIcon.svg';
import Shovel from './../img/ShovelIcon.svg';
import BusinessPortrait from './../img/BusinessPortrait.jpg'

function HomePage () {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
            <div className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <hr />
                <h4>Jonathan M Miller</h4>
                <h5> Lead Technical Consultant, Software Engineering </h5>
                <br />
                <div className="text-section">
                    <a href="/contact">
                        <div className="image-container image-container offset-sm-2 offset-lg-1 col-sm-8 col-lg-4" style={{ float: "left" }}>
                            <span className="image-label" style={{fontSize: "75%"}}>Contact me for your next project!</span>
                            <img alt="Contact me for your next project!" className="" src={BusinessPortrait}></img>
                        </div>
                    </a>
                    <div className="description-verb-list col-lg-6 col-sm-12" style={{ float: "left", textAlign: "left" }}>
                        <hr />
                        <span style={{ position: "absolute", width: "100%" }}>I'm Jon</span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="write-software">
                            <a href="/skills" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span style={{ textAlign: "left", width: "100%" }}>I write software</span>
                                &nbsp;&nbsp;
                                <span className="UnderscoreIcon">&nbsp;</span>
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="build-things">
                            <a href="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I build things</span>
                                &nbsp;&nbsp;
                                <img alt="Animated Gear Icon" className="GearIcon" src={Gear} />
                                <img alt="Animated Gear Icon" className="LittleGearIcon" src={Gear} />
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="volunteer">
                            <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I solve problems</span>
                                &nbsp;&nbsp;
                                <img alt="Animated Shovel Icon" className="ShovelIcon" src={Shovel} />
                                <span>
                                </span>
                            </a>
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
                        <div style={{ paddingLeft: "0%", textAlign: "left" }}>
                            <br />
                            <h5>Well, hello there!</h5>
                            My name is Jon Miller. I'm a Hobbyist engineer, endurance runner, Pluralsight binge-watcher, Full Stack Software Engineer and Lead Technical Consultant.
                        </div>
                        <p style={{ margin: "0%" }}>
                            I pride myself in efficient, effective, and measurably beneficial work done for my clients and myself, and I'm continually striving toward growth in my professional and personal life.
                        </p>        
                        <div className="hyperlink">
                            <a href="/contact" className="stylized-underline">
                                <div>
                                    <h6>- Contact Me -</h6>
                                    <hr className="stylized-underline" />
                                    <br />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;