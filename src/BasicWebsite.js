import { Container } from "@material-ui/core";
import Card from "./Card";
import Projects from "./Projects";
import "./style.css"
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Skills from "./Skills"

function BasicWebsite() {
    return (
        <div>
            <Intro />
            <AboutMe />
            <Projects />
            <Skills />
        </div>
    
    )
}

export default BasicWebsite;