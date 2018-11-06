import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/about" component={AboutPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;