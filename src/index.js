import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ToDo from "./ToDo";
import CounterApp from "./CounterApp";
import BasicWebsite from "./BasicWebsite";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

ReactDOM.render(

  <Router>

    <p>
      <Link to = "/">Home Page</Link> 
    </p>
    <p>
      <Link to = "/about">About Page</Link>
    </p>
    <p>
      <Link to = "/todo">To Do App</Link>
    </p>
    <p>
      <Link to = "/counterapp">Counter App</Link>
    </p>
    <p>
      <Link to = "/basicwebsite">React Website</Link>
    </p>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path = "/counterapp" component = {CounterApp} ></Route>
    <Route path="/basicwebsite" component={BasicWebsite}></Route>
    <Route path="/basicwebsite/technicalskills" component={TechnicalSkills}></Route>
    <Route path="/basicwebsite/softskills" component={SoftSkills}></Route>

  </Router>, document.getElementById('root')
 
 );

